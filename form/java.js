console.log("HELLO");
var a=10;{
    var a=50;
    console.log("inner",a);
}
console.log("outer",a);
const b=10;{
  const  b=20;
    console.log("inner",b);
    }
    console.log("outer",b);
    const c=20;{
        const c="soni";
        console.log("inner",c);
        console.log("type",typeof(c));
   }
   console.log("outer",c);
   const e=20;{
    const d=56789403426638820363n;
    console.log("inner",d);
    console.log("type",typeof(d));
}
console.log("outer",e);
const g=20;{
    const f=BigInt(100);
    console.log("inner",f);
    console.log("type",typeof(f));
}
console.log("outer",g);
function myfun(){
    console.log("this is soniya");
}
myfun();
const h=20;{
    const i=true;
    console.log("inner",i);
    console.log("type",typeof(i));
}
console.log("outer",h);
 myfun2=function(){
    console.log("sharmiiii loosu");
}
myfun2();
hello=()=>{
    console.log("Hello");
}
hello();
multiply=(a,b)=>{
    console.log(a*b);
}
multiply(5,6);
const add = (a, b) => a + b;
console.log(add(3, 5)); 
mul=(a,b)=>{
    return(a*b);
}
console.log(mul(5,6));
const outerfunction=()=>{
    const a="outer function is called";
    const innerfunction=()=>{
        console.log("a",a);
    }
    return innerfunction;
}
const anotherfunction=outerfunction();

anotherfunction();
const person = {
    firstName:"Sharmila",
    lastName: "Devi",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  console.log(person.fullName());
let k=50;
if(k=="50"){
    console.log("good day");
}
let x=10;
let y=20;
let sum=100;
for(let i=0;i<5;i++){
    sum+=x*y;
}
console.log(sum);
let km=100;

for(let ka=1;ka<=km;ka++){
    if(ka%3==0 & ka%5==0){
      console.log("fizzbuzz");
    }
    else if(ka%3==0){
    console.log("fizz");
    }
    else if(ka%5==0){
        console.log("buzz");
    }
    else{
        console.log(ka);
    }
}
const colors=["pink","green","orange","yellow"];
const lastcolor=colors[colors.length-1];
colors.unshift("orange");
const firstcolor=colors[0];
console.log(firstcolor);
let result="";
colors.forEach(function(colors){
    result+=colors.trim()+" ";

})
console.log(result.trim());
for(const i of colors){
    console.log(i);
}
const choco=["dairy","5star","kitkat"];
let result1="";
result1+=choco.map(i =>i.trim()).join(" ");
    console.log(result1);
   const fruits=["mango","orange","apple","banana"];
   const sl=fruits.slice(0,3);
   console.log(fruits);
   const removed=fruits.splice(2,1);
   console.log(fruits); 
   console.log(removed);
   const removed1=fruits.splice(2,0,"kiwi","lemon");
   console.log(fruits);
   const removed2=fruits.splice(2,1,"kiwi","lemon");
   console.log(fruits); 
   const what={
     25 :"sharmi"
   }
   console.log(what);
   const per={fname :"sharmi",lname :"soni"}
   console.log(Object.keys(per))
   console.log(Object.values(per))
   console.log(Object.entries(per))
   per.fname="soni";
   per["lname"]="sharuuuumii";
   console.log(per)
   delete per["lname"]
   console.log(per)
