import { RegisterUserDto, LoginUserDto } from "../types/authTypes";
import User from "../models/user";
import bcrypt from "bcrypt";
import { createToken } from "./tokenService";

export const register = async (data: RegisterUserDto) => {
  const existingUser = await User.findOne({
    email: data.email,
  });
  if (existingUser) {
    throw new Error("Email already exist");
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    username: data.username,
    email: data.email,
    password: hashedPassword,
  });
  const token = createToken(user._id.toString());

  return {
    user,
    token,
  };
};

export const login = async (data: LoginUserDto) => {
  const user = await User.findOne({
    email: data.email,
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }
  const token = createToken(user._id.toString());

  return {
    user,
    token,
  };
};
