const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  function summ(param) {
    let sum = 0;
    let number = param;
    while (number >= 1) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  }

  let result = summ(n);
  
  while (result > 9) {
    result = summ(result);
  }

  return result;

}

module.exports = {
  getSumOfDigits
};
