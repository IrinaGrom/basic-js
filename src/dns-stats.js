const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainS = domains.sort( (a, b) => a.length - b.length);
  let arrDNS = [];
  let objDom = {};
  domainS.forEach(function (item) {
    let arr = item.split('.').reverse();
    let DNS = '.' + arr.join('.');
    arrDNS = [...arrDNS, DNS];
    let firstEl = '.' + arr[0];
    objDom = {...objDom, [firstEl]: 0, [DNS]: 0};
  });
  for (let key in objDom) {
    arrDNS.forEach(function (item) {
      if (item.includes(key)) {
        objDom[key] += 1;
      }
    });
  }
  return objDom;
}

module.exports = {
  getDNSStats
};
