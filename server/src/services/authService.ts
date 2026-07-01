import { RegisterUserDto } from "../types/authTypes";
import User from "../models/user";
import bcrypt from 'bcrypt';


export const register = async (data:RegisterUserDto)=>{

            const existingUser = await User.findOne({
                email:data.email
            });
            if (existingUser) {
              throw new Error("Email already exist");   
            }
            const hashedPassword = await bcrypt.hash(data.password,10);

           const user = await User.create({
                username:data.username,
                email:data.email,
                password:hashedPassword,
            });
            return user;
}