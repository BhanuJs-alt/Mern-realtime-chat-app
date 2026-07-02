import express,{Request,Response} from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import authRoute from './routes/authRoute';
import userRoute from './routes/userRoute';
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended:true }));

app.get('/',(req:Request ,res:Response)=>{
    
    res.json({
        success:true,
        message:"server is running"
    });
});

app.use('/auth',authRoute);
app.use('/user',userRoute);

export default app;