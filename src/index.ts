import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

//* Setting Up Server in TS
const app = express();
const port = 5000;
app.use(cors({
    credentials : true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

//* Setting Up Database
const MONGO_URL = "mongodb://127.0.0.1:27017";
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL, {dbName : "TypeScript_DB"}).then(c=>console.log("connected successfully to db"));
mongoose.connection.on('error', (error : Error)=>console.log(error))

//* Initializing Server
const server = http.createServer(app);
server.listen(port, ()=>{
    console.log(`Started Listening at ${port}`);
    
})

//* Test APIs
app.get("/",(req,res)=>{
    res.send("Hi, Working");
})

app.use("/",router())