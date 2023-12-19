const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = str;
  if (!options) {return result}
  if (!options.addition && options.addition !== false && options.addition !== null) {options.addition = ''}
  if (!options.additionSeparator) {options.additionSeparator = '|'}
  if (!options.additionRepeatTimes) {options.additionRepeatTimes = 1}
  if (!options.repeatTimes) {options.repeatTimes = 1}
  
  let add = options.addition + options.additionSeparator;
  strNew = str + add.repeat(options.additionRepeatTimes);
  if (options.additionSeparator.length !== 0) {
    strNew = strNew.slice(0, -(options.additionSeparator.length));
  }
  if (!options.separator) {options.separator = '+';}
  result = strNew + (options.separator + strNew).repeat(options.repeatTimes - 1);

  return result;
}

module.exports = {
  repeater
};

//let add = options.addition + options.additionSeparator;
//strNew = (str + add.repeat(options.additionRepeatTimes)).slice(0, -(options.additionSeparator.length));
//strNew = str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
//strNew = strNew.slice(0, -(options.additionSeparator.length));
/*
if (options.separator) {
  result = strNew + (options.separator + strNew).repeat(options.repeatTimes - 1);
} else {
  options.separator = '+';
  result = strNew + (options.separator + strNew).repeat(options.repeatTimes - 1);
}*/