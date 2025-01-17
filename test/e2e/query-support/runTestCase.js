'use strict';

require.extensions['.txt'] = function(module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};

const fs = require('fs');
const { mapValues } = require('lodash');

const bq = require('../support/connection-fake');
const convertTable = require('../../unit/support/table-to-json');
const prepareTable = function(tableData) {
  return tableData
    .replace(/{CURRENT_DATE}/g, (new Date).toISOString().substr(0, 10));
};

const _getTestCaseData = function(content) {
  return /^--SQL--\n([\s\S]+?)\n--RESULT--\n([\s\S]*?)$/.exec(content);
};

const DEFAULT = function(currentData, expectedData) {
  expect(currentData).to.be.eql(expectedData);
};

const NOT_ORDERED = function(currentData, expectedData) {
  expect(currentData).to.have.deep.members(expectedData);
};

module.exports = function(content, expectation) {
  expectation = expectation || DEFAULT;
  return async () => {
    // eslint-disable-next-line security/detect-non-literal-require
    const result = _getTestCaseData(require(content));
    let [data] = await bq.query(result[1]);
    data = data.map(row => {
      return mapValues(row, value => {
        if (value !== null && value.value) { return value.value; }
        return value;
      });
    });
    const expectedData = convertTable(prepareTable(result[2]));
    expectation(data, expectedData);
  };
};

module.exports.EXPECTATIONS = { DEFAULT, NOT_ORDERED };
