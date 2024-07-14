const person={fname:"soni",lname:"sharmi"}
const person2={fname:"soni",lname:"sharmi",age:20}
console.log(person)
console.log(person2)
const{lname,...rest}=person
console.log(rest)
const text='["ford","BMW","Audi"]';
const myarr=JSON.parse(text);
console.log(myarr)
const text1=['ford','BMW','Audi'];
const myarr1=JSON.stringify(text1);
console.log(myarr1)

