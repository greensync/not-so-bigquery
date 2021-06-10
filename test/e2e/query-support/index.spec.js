'use strict';
const fs = require('fs');
const runTestCase = require('./runTestCase');

require.extensions['.txt'] = function(module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8');
};

describe('SQL Function support', function() {
  /* eslint-disable max-len */
  context('Conversion functions', function() {
    it('cast numeric string to int64', runTestCase(require('./testcases/conversion_functions/cast-numeric-string-to-int64.txt')));
    it.skip('cast hex string to int64', runTestCase(require('./testcases/conversion_functions/cast-hex-string-to-int64.txt')));
  });

  context('Operators', function() {
    it('unnest', runTestCase(require('./testcases/operators/unnest.txt')));
  });

  context('Data types', function() {
    it('date_types', runTestCase(require('./testcases/data_types/date_types.txt')));
    it.skip('date_types_not_supported', runTestCase(require('./testcases/data_types/date_types_not_supported.txt')));
  });

  context('Aggregator functions', function() {
    it('avg', runTestCase(require('./testcases/aggregate_functions/avg.txt')));
    it('avg_distinct', runTestCase(require('./testcases/aggregate_functions/avg_distinct.txt')));
    it('avg_window', runTestCase(require('./testcases/aggregate_functions/avg_window.txt')));
  });

  context('Date functions', function() {
    it('current_date without timezone', runTestCase(require('./testcases/date_functions/current_date-without-tz.txt')));

    it('extract day', runTestCase(require('./testcases/date_functions/extract-day.txt')));

    it('date', runTestCase(require('./testcases/date_functions/date.txt')));

    it('date_add', runTestCase(require('./testcases/date_functions/date_add.txt')));
    it('date_sub', runTestCase(require('./testcases/date_functions/date_sub.txt')));
    it('date_diff', runTestCase(require('./testcases/date_functions/date_diff.txt')));
    it('date_trunc', runTestCase(require('./testcases/date_functions/date_trunc.txt')));
    it('format_date', runTestCase(require('./testcases/date_functions/format_date.txt')));
  });

  context('Time functions', function() {
    it('current_time', runTestCase(
      require('./testcases/time_functions/current_time.txt'),
      // eslint-disable-next-line no-unused-vars
      function(currentData, expectedData) {
        expect(currentData[0].the_time).to.match(/^\d{2}:\d{2}:\d{2}.\d{6}$/);
      }
    ));
    it('time', runTestCase(require('./testcases/time_functions/time.txt')));
    it('extract', runTestCase(require('./testcases/time_functions/extract.txt')));
    it('time_diff', runTestCase(require('./testcases/time_functions/time_diff.txt')));
  });
});
