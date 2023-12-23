const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let resArr = [];
  arr.forEach(function (item, index, array) {
      switch (item) {
        case '--discard-prev':
          resArr.pop();
          break;
        case '--double-prev':
          resArr = [...resArr, resArr[resArr.length - 1]];
          break;
        case '--discard-next':
          array[index + 1] = null;
          break;
        case '--double-next':
          resArr = [...resArr, array[index + 1]];
          break;
        default:
          break;
      }
      resArr = [...resArr, item];
  });
  
  let result =[];
  resArr.forEach(function (item) {
    switch (item) {
      case '--discard-prev':
        break;
      case '--double-prev':
        break;
      case '--discard-next':
        break;
      case '--double-next':
        break;
      case undefined:
        break;
      case null:
        break;
      default:
        result = [...result, item];
        break;
    }
  });
  return result;
}

module.exports = {
  transform
};
