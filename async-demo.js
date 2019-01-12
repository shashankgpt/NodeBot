fs = require('fs');

//data=fs.readdirSync('./');
function phoneNumber(err,data)
{
    console.log('data:',data);
}
fs.readdir('./',phoneNumber);

console.log("this comes after");