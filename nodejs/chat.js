const http=require('http');
const fs=require('fs');
const { buffer } = require('stream/consumers');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
        
        fs.readFile("message.txt",{encoding:'utf-8'},(data,err)=>{
            if(err){
                console.log(err);
            }
            res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(`<body>${data}</body>`);
        res.write('<body>$<data><form action="/message" method="POST"><input type="text" ><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
        });
         
    }
    else if(url==="/message" && method==="POST"){
        let body=[];
        req.on('data',(chunk)=>{
           
            body.push(chunk);

        });
        return req.on("end",()=>{
            
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split("=")[1];
           
            
           fs.writeFile('message.txt', message,(err)=>{
            if(err){
                console.log(err);
            }
            console.log(`indise fs.writefile`);
            res.statusCode=302;
            res.setHeader('location','/');
            return res.end();
            }); 
        });
    }else{
        res.setHeader("Content-Type","text/html");
        res.write("page not found");
        res.end();
    }


});
server.listen(4000);