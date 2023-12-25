const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let test = n.toLowerCase().split('-');
  let arr =[];
  for (let i = 0; i < 256; i++) {
    arr[i] = i.toString(16);
  }
  for (let i = 0; i < 16; i++) {
    arr[i] = '0' + arr[i];
  }
  let res = test.every(function (element) {
    for (let j = 0; j < 256; j++) {
      if (arr[j] === element) {
        console.log(element);
        return true;
      }
    }
  });
  return res;
}

module.exports = {
  isMAC48Address
};
