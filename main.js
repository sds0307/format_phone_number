let {checkPlusSign, removeCharacters, isValidUsaNumber} = require('./helper_functions/helper');

let getValidNumber = function(input){
    input = input.trim(); //trim spaces

    let phoneNumber = removeCharacters(input); //removes all the characters such as +,-,(,)

    if(phoneNumber[0] != '1'){
        phoneNumber = '1'+ phoneNumber; //Add country code if not already present
    }

    if(!isValidUsaNumber(phoneNumber)){
        return null;
    }

    return '+' + phoneNumber;
}

module.exports = getValidNumber;