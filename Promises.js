const fs = require("fs");

function rajfilereader(){
   return new promise(function(resolve){
        fs.readFile("matter.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}

function onback(data){
    console.log(data);
}

rajfilereader().then(onback);