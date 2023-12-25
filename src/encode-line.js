const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // error 'abbcca'
  let arr = str.split('');
  let obj = {[arr[0]]: 1};
  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] === arr[i]) {
      if (obj[arr[i]]) {
        obj[arr[i]] += 1;
      } else {
        obj = {...obj, [arr[i]]: 2};
      }
    } else {
      obj = {...obj, [arr[i]]: 1};
    }
  }
  let res = '';
  for (let key in obj) {
    res += obj[key] + key;
  }
  return res.replace(/1/gi, '');
}

module.exports = {
  encodeLine
};
