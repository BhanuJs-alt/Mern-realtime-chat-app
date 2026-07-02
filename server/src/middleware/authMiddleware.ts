import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../services/tokenService";
import User from "../models/user";


const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction, 
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorised",
    });
  }
  const verified = verifyToken(token);
  
  const user = await User.findById(verified.userId);
  if (!user) {
    return res.status(401).json({
        success: false,
        message: "Unauthorized",
    });
}

  req.user = user;

  next();
};

export default authMiddleware;
