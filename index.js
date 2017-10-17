const Hashids = require('./lib/hashids');

/**
 * extends to think, controller, context
 */
module.exports = {
  controller: {
    hashids: options => new Hashids(options)
  },
  context: {
    hashids: options => new Hashids(options)
  },
  think: {
    hashids: options => new Hashids(options)
  }
};
