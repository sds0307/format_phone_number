let getValidNumber = require('../main');

let phoneNumbers = [
['716-939-8854','+17169398854'],
['7169398854','+17169398854'],
['+1716-939-8854','+17169398854'],
['1716939-8854','+17169398854'],
['11716-939-8854',null],
['999-939-8854',null],
['716(939)8854','+17169398854'],
['0716-939-8854',null]
];


//Unit tests

let passCount = 0, failCount = 0;
for(let num of phoneNumbers){
    console.log('Testing for :', num[0]);
    if(getValidNumber(num[0]) == num[1]){
        console.log('Success');
        passCount++;
    } else {
        console.log('Failure');
        failCount++;
    }
}
console.log('Number of test cases passed: ', passCount);
console.log('Number of test cases failed: ', failCount);