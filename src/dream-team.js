const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(Array.isArray(members))) { return false };
  let sortMem = members.sort();
  let nameTeam = '';
  let newArr = [];
  sortMem.forEach(function (item) {
    if (typeof item == 'string') {
      newArr = [...newArr, item.trim().toUpperCase()];
    }
  });
  newArr = newArr.sort();
  newArr.forEach(function (item) {
    if (typeof item == 'string') {
      nameTeam += item.charAt(0);
    }
  });
  return nameTeam;
}

module.exports = {
  createDreamTeam
};
