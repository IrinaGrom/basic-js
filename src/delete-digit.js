const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let arr = str.split('');
  let maxArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newArr = str.split('');
    newArr[i] = null;
    let number = newArr.reduce(function (acc, currentValue) {
      if (acc == null) { acc = 0 }
      if (currentValue) {return acc + currentValue}
      return acc;
    });
    maxArr = [...maxArr, number];
  }
  return Math.max(...maxArr);
}

module.exports = {
  deleteDigit
};
