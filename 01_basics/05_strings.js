const name="spoorthi-spoo"
const repoCount=50

//console.log(name +repoCount + "value"); //concatinate


//plz use this syntax which is valuabale
console.log(`hello my name is ${name} and my repo Count is ${repoCount}`);
//string interpollation 

const Name=("spoorthi-gcc-bca")

console.log(Name[0]);
console.log(Name.__proto__);


console.log(Name.length)
console.log(Name.toUpperCase())

console.log(Name.charAt(1));//position of character
console.log(Name.charAt(3));
console.log(Name.indexOf('r'));//index of the letter

const String=Name.substring(1,4); //starts from 1 and ends with 4
console.log(String);

const anotherstring=Name.slice(-11,5) //reverse formate
console.log(anotherstring);


const newString="   spoo   "
console.log(newString);//same value with space
console.log(newString.trim()); //it removes the space

const url="https://github.com/Spoorti143/Spoorti143"
console.log(url.replace('.','----'));
//to check wheather the string which we find is present in url or not

const url1="https://github.com/Spoorti143/Spoorti143"
console.log(url1.includes('Spoorti1430'))

console.log(Name.split("-")); //it splits the value in array
