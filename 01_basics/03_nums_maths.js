const score=500
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length); //counts length od digit
console.log(balance.toFixed(2));//it adds zeros and gets fixed value

const otherNumber=123.8955
console.log(otherNumber.toPrecision(4));//round off

const otherNumber1=1123.8955
console.log(otherNumber1.toExponential(2));//after point it adds exponential

const  hundreds=1000000
console.log(hundreds.toLocaleString('en-In')) //indian standard

//******MATHS********
//different methods  are present in inspect math
console.log(Math);
console.log(Math.abs(-4)) //absolute 
console.log(Math.round(5.6)) //round off
console.log(Math.ceil(5.6))//similar to roundoff
console.log(Math.floor(4.9))//chooses lower number
console.log(Math.min(2,5,1))//minimum number
console.log(Math.max(10,23,34))//maximum number

console.log(Math.random());//it gives value under 0 and 1
console.log(Math.random()*10)//shifts decimal point it will be 0.1
console.log((Math.random()*10)+1);//to avoid 0 
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()+(max-min +1) + min))