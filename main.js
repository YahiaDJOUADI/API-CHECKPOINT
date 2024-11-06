const express = require('express')
const mongoose = require('mongoose')
const app = express();
const userRoute = require("./routes/userRoute")
app.use(express.json())
app.use(userRoute)




mongoose.connect("mongodb://127.0.0.1:27017/users");
app.listen(3000 ,()=>{console.log("started server on http://localhost:3000")})