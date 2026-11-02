const { NotImplementedError } = require('../lib');

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
const SEASONS = [
  'winter', 'winter', 'spring', 'spring', 'spring', 'summer',
  'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter',
];

function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  let month;
  try {
    month = Date.prototype.getMonth.call(date);
  } catch {
    throw new Error('Invalid date!');
  }

  if (Number.isNaN(month)) {
    throw new Error('Invalid date!');
  }

  return SEASONS[month];
}

module.exports = {
  getSeason
};
