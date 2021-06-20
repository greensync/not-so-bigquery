'use strict';

module.exports.BIGQUERY_TYPES = {
  'STRING': 'TEXT',
  'INTEGER': 'BIGINT',
  'INT64': 'BIGINT',
  'FLOAT': 'FLOAT',
  'FLOAT64': 'FLOAT',
  'NUMERIC': 'NUMERIC(38, 9)',
  'BOOLEAN': 'BOOLEAN',
  'BOOL': 'BOOLEAN',
  'DATE': 'DATE',
  'TIME': 'TIME',
  'DATETIME': 'TIMESTAMP WITH TIME ZONE'
};

module.exports.BIGQUERY_DATE_PARTS = {
  'DAYOFWEEK': 'DOW',
  'DAY': 'DAY',
  'DAYOFYEAR': 'DOY',
  'WEEK': 'WEEK',
  'ISOWEEK': 'WEEK',
  'MONTH': 'MONTH',
  'QUARTER': 'QUARTER',
  'YEAR': 'YEAR',
  'ISOYEAR': 'ISOYEAR',
  'MICROSECOND': 'MICROSECONDS',
  'MILLISECOND': 'MILLISECONDS',
  'SECOND': 'SECOND',
  'MINUTE': 'MINUTE',
  'HOUR': 'HOUR'

};

module.exports.BIGQUERY_DATE_TYPES = {
  'DATE': 'DATE',
  'DATETIME': 'TIMESTAMP WITH TIME ZONE',
  'TIME': 'TIME',
  'TIMESTAMP': 'TIMESTAMP WITH TIME ZONE'
};

module.exports.POSTGRES_TYPES = {
  'JSONB': 'JSON',
  'TEXT': 'STRING',
  'INT4': 'INTEGER',
  'INT8': 'INTEGER',
  'BOOL': 'BOOLEAN',
  'FLOAT8': 'FLOAT',
  'TIME': 'TIME',
  'DATE': 'DATE',
  'TIMESTAMPTZ': 'TIMESTAMP',
  'TIMESTAMPT': 'TIMESTAMP',
  'NUMERIC': 'FLOAT'
};
