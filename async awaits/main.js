console.log("Person 1: shows ticket");
console.log("person 2: shows ticket");
const premovie = async()=>{
    let ticket=new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            resolve("ticket")
        },2000);
    })
    const coke=new Promise((resolve, reject) => {
        resolve("coke");
    })
    const popcorn=new Promise((resolve, reject) => {
        resolve("popcorn");
    })
    let pop=await popcorn;
    console.log(`I have ${pop}`);
    let co= await coke;
    console.log(`i have ${co}`);

    return ticket;

}
premovie().then((m)=>console.log(`Person 3: shows ${m}`));
