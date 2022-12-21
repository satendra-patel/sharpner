
var od= document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<od.length;i++){
    od[i].style.backgroundColor="red";
}
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<even.length;i++)
{
    even[i].style.backgroundColor="cyan";
}
document.querySelectorAll(".list-group-item")[1].style.backgroundColor="green";