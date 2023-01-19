const posts=[
    {title:'post1' ,body:'this is post 1',createdAt:new Date().getTime()},
    {title:'post2' ,body:'this is post 2',createdAt:new Date().getTime()}
];
function getposts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output +=`<li> ${post.title} created at ${Math.floor((new Date().getTime()-post.createdAt)/1000)}</li>`;
        });
        document.body.innerHTML=output;

    },1000);
}
function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
            const error=false;
            if(!error){
                resolve(1);
            }
            else{
                reject("error");
            }
        },2000);

    });
    
}

createpost({title:'post3',body:'this is post 3'});
createpost({title:'post 4',body:'this is post 4'}).then(getposts)