//primitive datatypes

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
//let userName;

const id=Symbol('123');
const anotherId=Symbol('123')

console.log(id==anotherId);


//const bigNumber=123428313765238n

//reference (Non Primitive)

const heros=["sharukhan","amirkhan","shahidh"];//array
let myobj={
    name:"spoorthi",
    age:20,
}

//function declaration(it can be treated as variable too)
const myfunction=function(){
    console.log("hello world");  
}

console.log(typeof anotherId);


//***************************************************************************************************************************************************************//

//Stack (primitive)
//heap  (non-primitive)


//stack
let myYoutubeName="spoorthi.com"

let anothername=myYoutubeName  //reference
anothername="ashlesha"

console.log(anothername);
console.log(myYoutubeName);

//heap
let userOne={
    email:"spoorth06@gmail.com",
    upi:"upiybl"
}

let userTwo=userOne


userTwo.email="ashu@.gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

