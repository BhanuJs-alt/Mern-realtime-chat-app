import express,{Request,Response} from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get('/',(req:Request ,res:Response)=>{
    
    res.json({
        success:true,
        message:"server is running"
    });
});

export default app;