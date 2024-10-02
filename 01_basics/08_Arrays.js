//array

const myarray=[0,1,2,3,4,5]
const myHeors=["sharukhan","salmankhan"]
const myheroeins=["spoo","ashu","diksha","abhi"]

const myarray2=new Array(1,2,3,4)
console.log(myarray[1]);
console.log(myheroeins[1])

//array methods

myarray.push(6);
myarray.pop(7)//it removes last value
console.log(myarray);

myarray.unshift(9)//it adds at the starting value
myarray.shift()//it removes added value
console.log(myarray);

console.log(myarray.includes(5));
console.log(myarray.indexOf(1));

const newArray=myarray.join()
console.log(myarray);
console.log(newArray);

console.log(typeof newArray);//converts to string


//slice,splice

console.log("A",myarray);
const myn1=myarray.slice(1,3)//it prints original value
console.log(myn1)

console.log("B",myarray);
const myn2=myarray.splice(1,3)//it manipulate the orignal opertions 
console.log("C",myarray);
console.log(myn2);

// console.log("C",myarray);
// const myn3=myarray.splice(1,3)
// console.log(myn3);
