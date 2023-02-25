const express = require('express');
const bodyParser = require('body-parser');
const fs=require('fs');
const app = express();



app.use(bodyParser.urlencoded({extended: false}));
var userkanaam;
app.get("/",(req,res)=>{
    fs.readFile("message.txt",(err,data)=>{
        if(err){
            data='no message found';
            console.log(err);
        }
        res.send(` ${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">

        <input id="message" type="text" name="message">
        <input id="username" type="hidden" name="username">
    
        <button type="submit">Send</button>
    
    </form>`);
    })
   
});

app.post("/",(req,res)=>{
    fs.writeFile("message.txt",`${req.body.username}: ${req.body.message}`,{flag:'a'},(err)=>{
        err?console.log(err) : res.redirect("/");
    });
    
 
});

app.get("/login",(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="POST">

	<input id="username" type="text" name="title">

	<button type="submit">add</button>

</form>`);
next();
});

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});


app.listen(3000);