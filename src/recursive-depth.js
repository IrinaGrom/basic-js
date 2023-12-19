const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    const res = [];
    function flatten(array) {
      for (let i = 0; i < array.length; i += 1) {
        const currVal = array[i];
        if (Array.isArray(currVal)) {
          count += 1;
          flatten(currVal);
        } else {
          res.push(currVal);
        }
      }
    }
    flatten(arr);
    return count;
  }
}

module.exports = {
  DepthCalculator
};


    /*if (Array.isArray(arr)) {
      i += 1;
      arr.forEach(function (item) {
        if (Array.isArray(item)) {
          i += 1;
        }
      });
    }*/