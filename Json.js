const obj = {
    "name":"raj",
    "Age":24,
}

const str = JSON.stringify(obj);
console.log(str);

const str1 = '{"name":"raj","Age":24}';
console.log(JSON.parse(str1));