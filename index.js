const Hashids = require('./lib/hashids');

/**
 * extends to think, controller, context
 */
module.exports = options => {
  return {
    controller: {
      hashids: new Hashids(options)
    },
    context: {
      hashids: new Hashids(options)
    },
    think: {
      hashids: new Hashids(options)
    }
  };
};
