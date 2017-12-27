let getValidNumber = require('./main');

input = process.argv.slice(2);

if(input.length != 1){
    console.log('Invalid/No Input arguments');
    return;
}

let res = getValidNumber(input[0]);

if(res == null)
    console.log('Invalid Number');
else
    console.log(res);