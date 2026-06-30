import mongoose from "mongoose";


const connectDB = async()=>{
     try {
        const mongoUri = process.env.MONGO_URI;
         if(!mongoUri){
            throw new Error("Mongo URI is missing");
         }
        await mongoose.connect(mongoUri);
        console.log("MongoDB is connected");
     } catch (error) {
        console.log(error.message);
     }
}

export default connectDB;