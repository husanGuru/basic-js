const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2n ** BigInt(disksNumber) - 1n;
  const seconds = (turns * 3600n) / BigInt(turnsSpeed);

  return { turns: Number(turns), seconds: Number(seconds) };
}

module.exports = {
  calculateHanoi
};
