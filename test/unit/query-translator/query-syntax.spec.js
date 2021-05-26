'use strict';
const runExpectation = require('./run-expectation');

describe('Query Translator', function() {

  /* eslint-disable max-len */
  describe('query syntax', function() {
    it('comment-inline-block-style', runExpectation(require('./testcases/syntax/comment-inline-block-style.txt')));
    it('comment-inline-c-style', runExpectation(require('./testcases/syntax/comment-inline-c-style.txt')));
    it('comment-inline-sql-style', runExpectation(require('./testcases/syntax/comment-inline-sql-style.txt')));
    it('comment-multi-line-block-style-empty', runExpectation(require('./testcases/syntax/comment-multi-line-block-style-empty.txt')));
    it('comment-multi-line-block-style-starting-end-of-line', runExpectation(require('./testcases/syntax/comment-multi-line-block-style-starting-end-of-line.txt')));
    it('comment-multi-line-block-style', runExpectation(require('./testcases/syntax/comment-multi-line-block-style.txt')));
    it('comment-single-line-c-style', runExpectation(require('./testcases/syntax/comment-single-line-c-style.txt')));
    it('comment-single-line-sql-style', runExpectation(require('./testcases/syntax/comment-single-line-sql-style.txt')));
    it('expression-cast', runExpectation(require('./testcases/syntax/expression-cast.txt')));
    it('expression-comma-separated-list', runExpectation(require('./testcases/syntax/expression-comma-separated-list.txt')));
    it('expression-array-of-integers', runExpectation(require('./testcases/syntax/expression-array-of-integers.txt')));
    it('expression-array-of-strings', runExpectation(require('./testcases/syntax/expression-array-of-strings.txt')));
    it('expression-array-of-booleans', runExpectation(require('./testcases/syntax/expression-array-of-booleans.txt')));
    it('from-clause-backtick-table-name', runExpectation(require('./testcases/syntax/from-clause-backtick-table-name.txt')));
    it('from-clause-dataset-project-handling-uses-default', runExpectation(require('./testcases/syntax/from-clause-dataset-project-handling-uses-default.txt')));
    it('from-clause-dataset-project-handling', runExpectation(require('./testcases/syntax/from-clause-dataset-project-handling.txt')));
    it('from-clause-inner-join-table', runExpectation(require('./testcases/syntax/from-clause-inner-join-table.txt')));
    it('from-clause-join-more-tables', runExpectation(require('./testcases/syntax/from-clause-join-more-tables.txt')));
    it('from-clause-join-table', runExpectation(require('./testcases/syntax/from-clause-join-table.txt')));
    it('from-clause-join-using', runExpectation(require('./testcases/syntax/from-clause-join-using.txt')));
    it('from-clause-more-items', runExpectation(require('./testcases/syntax/from-clause-more-items.txt')));
    it('from-clause-subquery-inception', runExpectation(require('./testcases/syntax/from-clause-subquery-inception.txt')));
    it('from-clause-subquery-with-alias', runExpectation(require('./testcases/syntax/from-clause-subquery-with-alias.txt')));
    it('from-clause-subquery', runExpectation(require('./testcases/syntax/from-clause-subquery.txt')));
    it('from-clause-table-alias-with-as', runExpectation(require('./testcases/syntax/from-clause-table-alias-with-as.txt')));
    it('from-clause-table-alias', runExpectation(require('./testcases/syntax/from-clause-table-alias.txt')));
    it('from-clause-table-name', runExpectation(require('./testcases/syntax/from-clause-table-name.txt')));
    it('group-by-handles-an-expression', runExpectation(require('./testcases/syntax/group-by-handles-an-expression.txt')));
    it('group-by-handles-more-expressions', runExpectation(require('./testcases/syntax/group-by-handles-more-expressions.txt')));
    it('having-simple', runExpectation(require('./testcases/syntax/having-simple.txt')));
    it('limit-clause-limit-offset', runExpectation(require('./testcases/syntax/limit-clause-limit-offset.txt')));
    it('limit-clause-only-limit', runExpectation(require('./testcases/syntax/limit-clause-only-limit.txt')));
    it('order-by-complex-definition', runExpectation(require('./testcases/syntax/order-by-complex-definition.txt')));
    it('order-by-handles-field-asc', runExpectation(require('./testcases/syntax/order-by-handles-field-asc.txt')));
    it('order-by-handles-field-desc', runExpectation(require('./testcases/syntax/order-by-handles-field-desc.txt')));
    it('order-by-handles-more-fields-asc-desc', runExpectation(require('./testcases/syntax/order-by-handles-more-fields-asc-desc.txt')));
    it('order-by-handles-more-fields', runExpectation(require('./testcases/syntax/order-by-handles-more-fields.txt')));
    it('order-by-handles-nulls-first', runExpectation(require('./testcases/syntax/order-by-handles-nulls-first.txt')));
    it('order-by-handles-nulls-last', runExpectation(require('./testcases/syntax/order-by-handles-nulls-last.txt')));
    it('order-by-handles-one-field', runExpectation(require('./testcases/syntax/order-by-handles-one-field.txt')));
    it('query-expression-bracketed-query-expression', runExpectation(require('./testcases/syntax/query-expression-bracketed-query-expression.txt')));
    it('query-expression-inside-query-expression', runExpectation(require('./testcases/syntax/query-expression-inside-query-expression.txt')));
    it('select-all', runExpectation(require('./testcases/syntax/select-all.txt')));
    it('select-binary-operator-is', runExpectation(require('./testcases/syntax/select-binary-operator-is.txt')));
    it('select-distinct', runExpectation(require('./testcases/syntax/select-distinct.txt')));
    it('select-from-alias-reference', runExpectation(require('./testcases/syntax/select-from-alias-reference.txt')));
    it('select-function-empty', runExpectation(require('./testcases/syntax/select-function-empty.txt')));
    it('select-function-inception', runExpectation(require('./testcases/syntax/select-function-inception.txt')));
    it('select-function-with-asterisk', runExpectation(require('./testcases/syntax/select-function-with-asterisk.txt')));
    it('select-literals', runExpectation(require('./testcases/syntax/select-literals.txt')));
    it('select-simple-query-with-asterisk', runExpectation(require('./testcases/syntax/select-simple-query-with-asterisk.txt')));
    it('select-simple-query-with-mixed-expressions', runExpectation(require('./testcases/syntax/select-simple-query-with-mixed-expressions.txt')));
    it('select-simple-query-with-more-field-names', runExpectation(require('./testcases/syntax/select-simple-query-with-more-field-names.txt')));
    it('select-simple-query-with-one-field-name', runExpectation(require('./testcases/syntax/select-simple-query-with-one-field-name.txt')));
    it('select-simple-query', runExpectation(require('./testcases/syntax/select-simple-query.txt')));
    it('select-struct', runExpectation(require('./testcases/syntax/select-struct.txt')));
    it('select-with-complex-expressions', runExpectation(require('./testcases/syntax/select-with-complex-expressions.txt')));
    it('select-with-named-query-parameter', runExpectation(require('./testcases/syntax/select-with-named-query-parameter.txt')));
    it('select-with-qualified-identifiers', runExpectation(require('./testcases/syntax/select-with-qualified-identifiers.txt')));
    it('where-binary-operator-and', runExpectation(require('./testcases/syntax/where-binary-operator-and.txt')));
    it('where-binary-operator-between-expressions', runExpectation(require('./testcases/syntax/where-binary-operator-between-expressions.txt')));
    it('where-binary-operator-between-simple', runExpectation(require('./testcases/syntax/where-binary-operator-between-simple.txt')));
    it('where-binary-operator-between-single', runExpectation(require('./testcases/syntax/where-binary-operator-between-single.txt')));
    it('where-binary-operator-equal', runExpectation(require('./testcases/syntax/where-binary-operator-equal.txt')));
    it('where-binary-operator-in', runExpectation(require('./testcases/syntax/where-binary-operator-in.txt')));
    it('where-binary-operator-is', runExpectation(require('./testcases/syntax/where-binary-operator-is.txt')));
    it('where-binary-operator-or', runExpectation(require('./testcases/syntax/where-binary-operator-or.txt')));
    it('where-grouping-complex', runExpectation(require('./testcases/syntax/where-grouping-complex.txt')));
    it('where-grouping-simple', runExpectation(require('./testcases/syntax/where-grouping-simple.txt')));
    it('where-literal-value', runExpectation(require('./testcases/syntax/where-literal-value.txt')));
    it('where-simple', runExpectation(require('./testcases/syntax/where-simple.txt')));
    it('where-unary-operator-not', runExpectation(require('./testcases/syntax/where-unary-operator-not.txt')));
    it('whitespace-handling', runExpectation(require('./testcases/syntax/whitespace-handling.txt')));
    it('with-clause-more-items', runExpectation(require('./testcases/syntax/with-clause-more-items.txt')));
    it('with-clause-simple-query', runExpectation(require('./testcases/syntax/with-clause-simple-query.txt')));
    it('with-clause-with-inception', runExpectation(require('./testcases/syntax/with-clause-with-inception.txt')));
  });
});