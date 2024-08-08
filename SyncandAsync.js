// //sync means one after naother
// //async means parallel task a time context swithing


// function firstnight(){
//     let sum =0;
//     for(let i =0;i<10;i++){
//         sum = sum+i;
//     }
//     return sum;
// }

// // making the above process sync
// function syncSleep(){
//     let a=0;
//     for(let i =1;i<10000000;i++){
// a++;
//     }
//    console.log(firstnight());
// }

// //below is async function not from js but outside function does async func delegates task to other
// //means our script run
// //setTimeout(firstnight,1000);//other thread

// syncSleep();
// console.log("our task");//main threadd

// let fs = require("fs");

// //async func
// fs.readFile("matter.txt", "utf-8", function(err, data){
//     console.log(data);
// })
// // i run first
// console.log("i run first");


console.log("hello");

setTimeout(function(){
    console.log("iam anoynoms")
}, 5000)

for(let i =0;i<10;i++){

};

console.log("love last");