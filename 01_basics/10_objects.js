//declaring objects are of two types
//1)literal 2)constructor

//singleton

//object literal(declaring type)
//Object.create

//declaration of symbol
const mySymb=Symbol("mykey1")//interview question print symbol key

//declaration of object
const jsuser={
    name:"spoorthi",
    "full name":["spoorthi","chavan"],
    mySymb:"key1",//act as key
    age:21,
    location:"belgaum",
    email:"spoorthichavan143@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["sunday","saturday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mySymb]);

jsuser.email="spoorthichavan143@gmail.com"
//Object.freeze(jsuser)
jsuser.email="spoorthichatgpt.gmail.com"
console.log(jsuser);

//function declaration
jsuser.greeting=function(){
    console.log("my name is spoo");
    }
jsuser.greetingTwo=function(){
    console.log('my name is spoo ','${this.name}')
    }
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
    