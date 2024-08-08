// const person ={
//     firstName : "raj",
//     age:"25"

// }

const persons  =[{
    firstName : "raj",
    age:"25",
    gender:"male"

},{
    firstName: "dorka",
    age:"35",
     gender:"female",
     metadata:{
        age:"21",
        address:"razole"
     }
},{
    firstName : "iris",
    age:"20",
     gender:"male"
}
]

for(let i =0;i<persons.length;i++){
    if(persons[i]["gender"]=="male"){
        console.log(persons[i]["firstName"]);
    }
}

console.log(persons[1]["metadata"]["address"]);
// console.log(person["firstName"]);