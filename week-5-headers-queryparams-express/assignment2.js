const express=require('express');
const app=express();

app.use((req, res, next) => {
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString(); // more readable than ms

    console.log(`[${timestamp}] ${method} ${url}`);
    next();
});


//assignment 3
let numberofrequests=0;
app.use((req,res,next)=>{
    numberofrequests++
    
})
// different route handlers
app.get('/numofreq',(req,res)=>{
    res.status(200).json({numberofrequests:numberofrequests})
})