

const fs = require("fs");
function rajfunction(cb){
    fs.readFile("matter.txt", "utf-8", function(err, data){
        cb(data);
    })
}


function ondone(data){
    console.log(data); 
}

rajfunction(ondone)