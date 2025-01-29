import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import helmet from "helmet";

//init a express sever
const app = express();
//loading  env server
dotenv.config();

//creating a server this requried for express to listen to specific
const server = http.createServer(app);
const port=process.env.PORT ||3000;
const mongo_uri= process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/test";
mongoose.connect(mongo_uri).then(()=>{
    console.log('Connected to database');
  }).catch(err=>{
    console.log(err);
});

app.use(morgan());
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.text());

app.use(cors(
    {
        origin:['*'],
        crendendials:true,
    }
));
server.listen(port,()=>{
    console.log(`Server is running on port `, port);
});
