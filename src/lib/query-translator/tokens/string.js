'use strict';

const { createToken } = require('chevrotain');

module.exports = createToken({
  name: 'String',
  pattern: /('''|""")[\n\s\S]+\1|(?:((?<![\\])['"])((?:.(?!(?<![\\])\2))*.?)\2)/,
  line_breaks: true,
  start_chars_hint: ['\'', '"']
});