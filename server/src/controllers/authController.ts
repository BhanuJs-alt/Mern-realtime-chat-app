import { Request,Response } from "express";
import * as authService from "../services/authService";

export const register = async (req:Request,res:Response)=>{

     const user = await  authService.register(req.body);

      res.status(201).json({
        user,
        message:"user created", 
      });
}