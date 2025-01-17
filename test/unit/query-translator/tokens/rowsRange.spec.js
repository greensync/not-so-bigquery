'use strict';

const token = require('../../../../src/lib/query-translator/tokens/rowsRange');

describe('ROWS|RANGE token', function() {
  [
    'rows', 'range',
    'ROWS', 'RANGE'
  ].forEach(image => {
    it(`identifies '${image}'`, function() {
      const result = token.PATTERN.exec(image);
      expect(image).to.be.eql(result[0]);
    });
  });
});
