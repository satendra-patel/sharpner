const http = require('http');

const express=require('express');


const app=express();

app.use((req,res,next)=>{
    console.log("inside the middleware");
    next();
});
app.use((req,res,next)=>{
    console.log("inside another middleware");
    res.send(`<h2>hello from express</h2>`);
})

const server = http.createServer(app);

server.listen(3000);