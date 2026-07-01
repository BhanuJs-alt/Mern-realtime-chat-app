import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: string;
}

export const createToken = (userId: string): string => {
  const token = jwt.sign(
    {
      userId,
    },
    process.env.JWT_SECERT!,
    {
      expiresIn: "7d",
    },
  );
  return token;
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
};
