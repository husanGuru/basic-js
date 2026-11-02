const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
const CONTROL_WORDS = ['--discard-next', '--double-next', '--discard-prev', '--double-prev'];

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const counts = new Array(arr.length).fill(0);
  let pendingNext = null;

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (el === '--discard-next' || el === '--double-next') {
      if (i + 1 < arr.length && !CONTROL_WORDS.includes(arr[i + 1])) {
        pendingNext = el === '--discard-next' ? 'discard' : 'double';
      }
      continue;
    }

    if (el === '--discard-prev' || el === '--double-prev') {
      if (i - 1 >= 0 && !CONTROL_WORDS.includes(arr[i - 1]) && counts[i - 1] > 0) {
        if (el === '--discard-prev') {
          result.pop();
          counts[i - 1]--;
        } else {
          result.push(arr[i - 1]);
          counts[i - 1]++;
        }
      }
      continue;
    }

    if (pendingNext === 'discard') {
      counts[i] = 0;
    } else if (pendingNext === 'double') {
      result.push(el, el);
      counts[i] = 2;
    } else {
      result.push(el);
      counts[i] = 1;
    }
    pendingNext = null;
  }

  return result;
}

module.exports = {
  transform
};
