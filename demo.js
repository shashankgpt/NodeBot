var fs =require('fs');
var data=require('./data.json');
console.log(data.hello);
fs.readFile('./data.json','utf-8',(err,data)=>{
    var data=JSON.parse(data);
    console.log(data.hello);
});