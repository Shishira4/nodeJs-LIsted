const express = require("express");
const routes=require("./routes");
require("dotenv").config();
const app = express();
app.listen(process.env.PORT,()=>{
    console.log("Listening to port "+process.env.PORT);
});
app.use('/api',routes);
app.get("/", async(req,res)=>{
    res.send("Welcome to Node Js App");
})

