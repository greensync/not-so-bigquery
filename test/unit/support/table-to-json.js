'use strict';

const { zipObject } = require('lodash');
const TYPES = {
  STRING: 'string',
  ARRAY: 'array',
  UNKNOWN: 'unknown'
};

module.exports = function(input) {
  const rows = input.split('\n').filter(row => row[0] === '|');
  const data = rows.map(row => row.split(/\s*\|\s*/).slice(1, -1));
  const headers = [];
  const headerTypes = [];

  const addHeader = function(name, type) {
    headers.push(name);
    headerTypes.push(type);
  };

  data.shift().forEach(headerName => {
    let matches;

    matches = /(.+)\[]$/.exec(headerName);
    if (matches) {
      addHeader(matches[1], TYPES.ARRAY);
      return;
    }

    matches = /(.+)\!$/.exec(headerName);
    if (matches) {
      addHeader(matches[1], TYPES.STRING);
      return;
    }

    addHeader(headerName, TYPES.UNKNOWN);
  });

  return data.map(row => zipObject(headers, row.map(function(value, index) {
    return cast(value, headerTypes[index]);
  })));
};

const cast = function(value, type) {
  if (value === 'NULL') {
    return null;
  }

  if (value === 'TRUE') {
    return true;
  }

  if (value === 'FALSE') {
    return false;
  }

  if (type === TYPES.STRING) {
    return value.toString();
  }

  if (type === TYPES.ARRAY) {
    return JSON.parse(value).map(cast);
  }

  // eslint-disable-next-line eqeqeq
  if (parseFloat(value) == value) {
    return parseFloat(value);
  }

  // eslint-disable-next-line eqeqeq
  if (parseInt(value, 10) == value) {
    return parseInt(value, 10);
  }

  if (['false', 'true'].includes(value)) {
    return JSON.parse(value);
  }

  return value;
};
