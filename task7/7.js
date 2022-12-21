let item=document.querySelector('#items');
console.log(item.parentElement);
console.log(item.lastElementChild);
console.log(item.lastChild);
item.previousElementSibling.innerHTML="hello";
var parent=document.getElementById("t");
var child=document.createElement("div");
child.innerHTML="<p> Guys</p>";
parent.appendChild(child);