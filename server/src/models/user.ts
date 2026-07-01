import mongoose from "mongoose";

export interface IUser {
    username:string;
    email : string;
    password:string;
    bio?:string;
    avatar?:string;
    lastSeen?:Date;
}

const userSchema = new mongoose.Schema<IUser>({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:4,
        maxLength:30,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
     password:{
        type:String,
        required:true,
        trim:true,
        select:false,
        minLength:8,
    },
    bio:{
        type:String
    },
    avatar:{
        type:String
    },
    lastSeen:{
        type:Date
    }
},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;