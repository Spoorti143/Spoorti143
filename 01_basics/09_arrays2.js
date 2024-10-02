const marvel_heros=["thor","ironman","spiderman"];
const DC=["superman","flashman","batsman"];

marvel_heros.push(DC)
console.log(marvel_heros);
console.log(marvel_heros[3][2]);

const allheros=marvel_heros.concat(DC)//concat method it combine and add new array
console.log(allheros);

const allnarrays=[...marvel_heros,...DC];//its spread method
console.log(allnarrays);

const new_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const  real_another_array=new_array.flat(Infinity)//it concatinate in one array itself
console.log(real_another_array);



console.log(Array.isArray("spoorthi"));//it gives not a array
console.log(Array.from("spoorthi"));//removing isarray adding frrom it separates the string

console.log(Array.from({name:"spoorthi"}))//interseting interview
//it creates empty array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//if we declare and print it creats array[]

//imp methods is,from,of