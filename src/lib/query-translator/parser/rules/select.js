/* eslint-disable new-cap */

'use strict';

const TOKENS = require('../../tokens');

/**
 * select:
 *     SELECT [ AS { STRUCT | VALUE } ] [{ ALL | DISTINCT }]
 *         { [ expression. ]* [ EXCEPT ( column_name [, ...] ) ]
 *             [ REPLACE ( expression [ AS ] column_name [, ...] ) ]
 *         | expression [ [ AS ] alias ] } [, ...]
 *     [ FROM from_item  [, ...] ]
 *     [ WHERE bool_expression ]
 *     [ GROUP BY { expression [, ...] | ROLLUP ( expression [, ...] ) } ]
 *     [ HAVING bool_expression ]
 *     [ WINDOW named_window_expression AS { named_window | ( [ window_definition ] ) } [, ...] ]
 */
module.exports = ($) => {
  $.RULE('select', () => {
    $.CONSUME(TOKENS.Select);
    $.OPTION1(() => $.SUBRULE($.selectModifier));
    $.SUBRULE($.selectList);
    $.OPTION2(() => {
      $.SUBRULE2($.fromClause);
    });
    $.OPTION3(() => {
      $.SUBRULE3($.groupByClause);
    });
  });

  $.RULE('selectModifier', () => {
    $.OR([
      { ALT: () => $.CONSUME(TOKENS.SelectDistinct) },
      { ALT: () => $.CONSUME(TOKENS.SelectAll) }
    ]);
  });

  $.RULE('selectList', () => {
    $.AT_LEAST_ONE_SEP({
      SEP: TOKENS.Comma,
      DEF: () => $.SUBRULE($.selectExpression)
    });
  });

  $.RULE('selectExpression', () => {
    $.SUBRULE($.expression);
  });

  require('./from_clause')($);
  require('./group_by_clause')($);
};
