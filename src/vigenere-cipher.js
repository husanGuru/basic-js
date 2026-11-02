const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  process(message, key, sign) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const msg = message.toUpperCase();
    const k = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (const char of msg) {
      if (/[A-Z]/.test(char)) {
        const shift = k.charCodeAt(keyIndex % k.length) - 65;
        const code = ((char.charCodeAt(0) - 65 + sign * shift + 26) % 26) + 65;
        result += String.fromCharCode(code);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.process(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    return this.process(encryptedMessage, key, -1);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
