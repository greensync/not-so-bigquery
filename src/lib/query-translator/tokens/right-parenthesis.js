'use strict';

const { createToken } = require('chevrotain');

module.exports = createToken({
  name: 'RightParenthesis',
  pattern: /\)/
});
