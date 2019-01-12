var fs=require('fs');

var data={
    name:'shanky'
}
fs.writeFile('data.json',JSON.stringify(data), (err,data)=>{
    console.log('done');
});