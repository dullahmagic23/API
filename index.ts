import * as dotenv from "dotenv";
dotenv.config()
const app = require("./src/server");

app.listen(8800,()=>{
    console.log("server is running at port 8800")
});