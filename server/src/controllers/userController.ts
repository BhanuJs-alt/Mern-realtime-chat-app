import { Request,Response } from "express";

export const userMe = (req:Request,res:Response)=>{
    if(!req.user){
        return res.status(404).json({
            message:"Not found"
        });
    }
    res.json({
       user: req.user,
        message:"Hii"
      });
}