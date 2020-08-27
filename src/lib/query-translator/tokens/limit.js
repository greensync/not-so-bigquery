'use strict';

const { createToken } = require('chevrotain');
const Identifier = require('./identifier');

module.exports = createToken({
  name: 'Limit',
  pattern: /LIMIT (0|[1-9]\d*)/i,
  longer_alt: Identifier
});
