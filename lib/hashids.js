/**
 * @author weihongyu<weihongyu12@outlook.com>
 * @version 1.0.0
 */

const helper = require('think-helper');
const Hashids = require('hashids');
const defaultConfig = require('./config.default');

class ThinkHashids {
  /**
   * @param {object} config
   * @param {string} config.salt
   * @param {number} config.minLength
   * @param {string} config.alphabet
   */
  constructor(config) {
    if (helper.isEmpty(config)) {
      config = defaultConfig;
    }
    this.hashids = new Hashids(config.salt, config.minLength, config.alphabet);
  }

  /**
   * Encode ids
   * @param {number|Array} id
   * @return {string}
   */
  encode(id) {
    return this.hashids.encode(id);
  }

  /**
   * Decode ids
   * @param {string} id
   * @return {object}
   */
  decode(id) {
    return this.hashids.decode(id);
  }

  /**
   * Encode hex instead of numbers
   * Useful if you want to encode Mongo's ObjectIds. Note that there is no limit on how large of a hex number you can pass (it does not have to be Mongo's ObjectId)
   * @param {string} hex
   * @return {string}
   */
  encodeHex(hex) {
    return this.hashids.encodeHex(hex);
  }

  /**
   * Decode hex instead of numbers
   * @param {string} id
   * @return {string}
   */
  decodeHex(id) {
    return this.hashids.decodeHex(id);
  }
}

module.exports = ThinkHashids;
