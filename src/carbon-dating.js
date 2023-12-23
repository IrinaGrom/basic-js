const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity) {return false};
  if (typeof sampleActivity !== 'string') {return false};
  let Activity = sampleActivity.trim() * 1;
  if (Activity.toString() === 'NaN') {return false};
  if (Activity <= 0 || Activity >= 15) {return false};
  let ln = Math.log((15/Activity).toFixed(6));
  let num = 5730 * ln / Math.LN2;
  return Math.trunc(num) + 1;
}

module.exports = {
  dateSample
};
