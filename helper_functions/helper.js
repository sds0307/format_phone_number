let US_AREA_CODES = require('../utils/areaCodes');

let removeCharacters = function(input){
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    let regex = /\D/g;
    return input.replace(regex, '');
}

let isValidUsaNumber = function(phoneNumber){
    if(phoneNumber.length != 11)
        return false;

    let areaCode = phoneNumber[1] + phoneNumber[2] + phoneNumber[3];
    return US_AREA_CODES.includes(areaCode);
}

module.exports = {
    removeCharacters,
    isValidUsaNumber
};