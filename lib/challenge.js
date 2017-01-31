'use strict';

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
function intToBin(num) {
  return (num >>> 0).toString(2);
}

function splitString(stringToSplit) {
  let arrayOfStrings = stringToSplit.split(',');
  return arrayOfStrings;
}

function isPal(num) {
  let NewArr = [];
  let argArr = num.toString();
  let argArr = splitString(argArr);



}

const doubleBasePalindromeSum = function (/* base1, base2, upperLimit */) {

  for (let i = 0; i < upperLimit; i++) {
    let biNum = intToBin(i);
    let intNum = i;


  }

};

module.exports = {
  doubleBasePalindromeSum,
};
