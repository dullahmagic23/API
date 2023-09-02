import express, {urlencoded} from "express";
import router from "./router";
import morgan from "morgan";

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended:true}))

app.use("/api", router);

app.get('/', (req,res)=>{
    console.log("Hello from server")
})

module.exports = app;