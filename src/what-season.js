const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {return 'Unable to determine the time of year!'};
  if (date instanceof Date) { // проверяет, создан ли объект данной функцией
    if (Object.prototype.toString.call(date) === '[object Date]') { //???
      let month = date.getMonth() + 1;
      if (month <= 2 || month == 12) {
        return 'winter';
      } else if (month <= 5) {
        return 'spring';
      } else if (month <= 8) {
        return 'summer';
      } else if (month <= 11) {
        return 'autumn';
      }
      // console.log(date.getTime());
      // test on: new Date('string')
      if (typeof date.getMonth() !== 'function') {
        throw new Error('Invalid date!');
      }
    } else {
      throw new Error('Invalid date!');
    }
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
