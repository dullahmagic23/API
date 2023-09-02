import express from "express";
import router from "./router";
import morgan from "morgan";
import {urlencoded} from "express";
import {protect} from "./modules/auth";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended:true}))

app.use("/api", protect,router);

app.get('/', (req,res)=>{
    console.log("Hello from server")
});

module.exports = app;