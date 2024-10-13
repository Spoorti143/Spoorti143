const tinderUser=new Object() //singleton object
// const tinderUser={}//non-singleton object

 tinderUser.id="123abc"
 tinderUser.name="spoo"
 tinderUser.isloggedIn="false"
console.log(tinderUser);

const normalUsers={
    email:"spoorthichavan143@gmail.com",
    fullname:{
        userfullname:{
            firstname:"spurthi",
            lastname:"chavan",
        }
    }
}

console.log(normalUsers.fullname?.userfullname.firstname.lastname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}


const obj3=Object.assign(obj1,obj2);
console.log(obj3);

const users= [
    {
        id:1,
        email:"sporthichavan06@email.com"
    },
    {
        id:1,
        email:"sporthichavan06@email.com"
    },
    {
        id:1,
        email:"sporthichavan06@email.com"
    }
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('email'));



