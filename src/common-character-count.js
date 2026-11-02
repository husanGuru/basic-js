const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  // Remove line below and write your code here
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    const foundIndex = s2.indexOf(s1[i]);
    if (foundIndex !== -1) {
      s2 = s2.slice(0, foundIndex) + s2.slice(foundIndex + 1);
      count++;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
