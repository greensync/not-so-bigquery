'use strict';

const { BigQuery } = require('@google-cloud/bigquery');

module.exports = new BigQuery({
  apiEndpoint: process.env.BIGQUERY_API_ENDPOINT,
  location: 'EU',
  // This is not supported for now due to an issue: https://github.com/googleapis/nodejs-bigquery/issues/944
  autoRetry: false
});
