// function objectcaller(obj){
//    const vals=  Object.keys(obj);
//    const vals1= Object.values(obj);
//    const vals2= Object.entries(obj);
//    console.log(vals);
//    console.log(vals1);
//    console.log(vals2);
// }

// const nums ={
//     key1:"raj",
//     key2:"havi",
//     key3:"iris"
// }

// objectcaller(nums);

const firstobj ={
    key1:"object1",
    key2:"object2",
    key3:"object3"
}

const newObject = Object.assign({},firstobj,{key4:"newObject4"});
console.log(newObject);