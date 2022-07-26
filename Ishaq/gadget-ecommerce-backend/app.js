require('dotenv').config();
const express = require('express')
const app = express();
const router= require("./src/routes/api");

//Security Middleware Import
const rateLimit= require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')
const mongoose= require('mongoose');

//Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json())

//rate limit
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter);

const uri = "mongodb://127.0.0.1:27017/gadget_ecommerce"; 
let option={autoIndex:true}
mongoose.connect(uri,option, (err)=>{
    if(!err){
        console.log("Database connection successfully")
    }
    else{
        console.log("Database connection fail")
    }
});
//managing backend routing 
app.use("/api/v1", router);



module.exports = app;