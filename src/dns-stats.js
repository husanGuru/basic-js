const { NotImplementedError } = require('../lib');

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
  // Remove line below and write your code here
  let result = {};

  for (const domain of domains) {
    const parts = domain.split('.');
    let construct = '';
    for (let i = parts.length - 1; i >= 0; i--) {
      const part = parts[i];
      construct += `.${part}`;
      if (result[construct]) {
        result[construct]++;
      } else {
        result[construct] = 1;
      }
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
