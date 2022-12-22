let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    let fname=document.getElementById("name").value;
    let e=document.getElementById("email").value;
    let mobile=document.getElementById('mobile').value;
    let obj={
        name:fname,
        email:e,
        mob:mobile
    }
    let k=JSON.stringify(obj);
    console.log(e);
    console.log(fname);
    console.log(mobile);
    console.log('hi');
    localStorage.setItem(e,k)
    




})
   