const express = require("express");

const app = express();

app.get('/', (req,res)=>{
    console.log("Hello from server")
})

module.exports = app;