const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = [];
  let obj ={};
  let count = 0;
  names.forEach(function (item) {
    let key = item;
    
    if (key in obj) {
      obj = {...obj, [key]: obj[key] += 1};
      count++;
      arr = [...arr, item + `(${count})`];
      
    } else {
      if (arr.includes(key)) {
        arr = [...arr, item + `(${count})`];
      } else {
      	obj = {...obj, [key]: 1};
      	arr = [...arr, item];
      }
    }
    
  });
  return arr;
}

module.exports = {
  renameFiles
};
