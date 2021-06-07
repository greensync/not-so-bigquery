'use strict';

const dateAdd = require('./date_add');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  CURRENT_DATE: function(ctx) { return 'TO_CHAR(CURRENT_TIMESTAMP, \'YYYY-MM-DD\')'; },
  DATE: require('./date'),
  DATE_ADD: function(ctx) { return dateAdd.call(this, ctx, dateAdd.OPERATION_ADD); },
  DATE_SUB: function(ctx) { return dateAdd.call(this, ctx, dateAdd.OPERATION_SUB); },
  DATE_DIFF: require('./date_diff'),
  DATE_TRUNC: require('./date_trunc'),
  FORMAT_DATE: require('./format_date')
};
