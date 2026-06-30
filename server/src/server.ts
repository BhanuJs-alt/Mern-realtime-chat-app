import app from './app';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();
const PORT = process.env.PORT || 8000;

const startServer=()=>{
   connectDB();
   app.listen(PORT,()=>{
   console.log(`Server is running at ${PORT}`);
});
}

startServer();