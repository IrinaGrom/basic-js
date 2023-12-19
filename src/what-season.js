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
  if (typeof date !== 'object') {return 'Invalid date!'};
  // new Date(year, month, date, hours, minutes, seconds, ms)
  // new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 января 2011, 00:00:00
  //let year = date.getFullYear();
  let month = date.getMonth() + 1;
  //let day =date.getDate();
  
  if (month <= 2 || month == 12) {
    return 'winter';
  } else if (month <= 5) {
    return 'spring';
  } else if (month <= 8) {
    return 'summer';
  } else if (month <= 11) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
