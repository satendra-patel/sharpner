const http=require('http');
const fs=require('fs');
const { buffer } = require('stream/consumers');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/')
    {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" ><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            console.log(message);
            fs.writeFileSync('message.txt',message);
            res.statusCode=302;
            res.setHeader('location','/');
            return res.end();
        });
       
       

    }
    res.write('Hello Guys');


});
server.listen(4000, () => {
    console.log('Satendra Patel');
  });