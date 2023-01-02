const student = {
    firstName:"John", 
    lastName:"Doe",
    age:20,
    eyeColor:"blue",
    
}
let Printage = function(){
    console.log(this.age);
}
Printage.call(student);


const s2={
    firstName:"satendra",
    lastName:"patel",
    age:21,
    eyecolor:"green"
}

Printage.call(s2);
Printage.apply(s2);
let p=Printage.bind(s2);
console.log(p);
p();

