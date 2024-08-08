// function sum(a, b){
//     return a +b;
// }

// const sum  =(a, b)=>{
//     return a +b;
// }

// const ans = sum(1,3);
// console.log(ans);


 let arr = [1,2,3,4,5];

// let newarr =[];

// for(let i =0;i<arr.length;i++){
//     newarr[i] = arr[i]*2;
// }
// console.log(newarr);

// function transform(n){
//    return n*2;
// }

// const ans = arr.map(transform);
// console.log(ans);

function filterlogic(n){
    if(n%2==0){
        return true;
    }
    else {
        return false;
    }
}

 const result = arr.filter(filterlogic);
 console.log(result);