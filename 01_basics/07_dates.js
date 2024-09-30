//DATES

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());

console.log(typeof myDate);//interview asked question is date is object or not ..yes its object

let myCreatedDate=new Date(2024,0,23)//in js months start by 0 
let myCreatedDate2=new Date("2024-01-23");//if we need date in form od dd/mm/yy then it starts from 01S
let myCreatedDate1=new Date(2024,0,23,5,3)
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());



let myTimeStamp= Date.now();
console.log(myTimeStamp)

console.log(Math.floor(Date.now()/1000))//it converts in milliseconds

//various methods
let newDate=new Date();
console.log(newDate.getHours());
console.log(newDate.getDay());
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:""
});//mostly used syntax whetre we can store various methods

