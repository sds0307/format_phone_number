**If not installed, Download and Install Node JS to run the code
https://nodejs.org/en/download/

To run the code type the following command on terminal
node getValidNumber.js <input in single quote>
eg: node getValidNumber.js '716-939-8854'

To run the unit tests type the following command
node test/test.js

Assumptions:
1. The input will be considered as valid format as long as it has 10 (or 11 if country code included) 
digits irrespective of the number/type of non-digit characters present in the input.
2. A valid US number should have area code as specified in http://www.csgnetwork.com/usphoneareacodesbyac.html

Code's functionality:
- Removes all the non digit characters from the input
- Appends 1 if first character is not 1
- Checks if the resultant number is a valid US number by
    a. Length is 11
    b. 3 characters after 1 is a valid area code
- Appends + sign and returns

Why I decided on this solution:
- A user can input his number in various formats depending on his/her region and style.
- Removing all no digit characters such as (,),-,+ cleans up the input and helps us focus on the digits.
- USA has specific state area codes which needs to be checked to check for a valid number.

References:
http://www.csgnetwork.com/usphoneareacodesbyac.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions






