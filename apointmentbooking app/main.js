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
    


show(fname,e,mobile);

})
function show(a,b,c){
 const parent=document.getElementById('ul');
 const child=`<li id="${b}"> ${a} ${b} ${c} </li> `;
 parent.innerHTML+=child;
}
   