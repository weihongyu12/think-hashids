const thinkHashids = require('./lib/hashids');

/**
 * extends to think, controller, context
 */
module.exports = {
  controller: {
    hashids: thinkHashids
  },
  context: {
    hashids: thinkHashids
  },
  think: {
    hashids: thinkHashids
  }
};
