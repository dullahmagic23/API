import * as dotenv from "dotenv";
dotenv.config()
const app = require("./src/server");

app.listen(8700,()=>{
    console.log("server is running at port 8700")
});