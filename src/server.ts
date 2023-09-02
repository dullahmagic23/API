import express from "express";
import router from "./router";
import morgan from "morgan";
import {urlencoded} from "express";
import {protect} from "./modules/auth";
import {createNewUser, login} from "./handlers/user";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended:true}))

app.use("/api", protect,router);

app.post('/user',createNewUser);
app.post('/login', login);


app.get('/', (req,res)=>{
    console.log("Hello from server")
});

module.exports = app;