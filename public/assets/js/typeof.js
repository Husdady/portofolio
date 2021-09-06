const isString = string => typeof string === 'string',
  isNumber = number => typeof number === 'number',
  isBoolean = data => typeof data === 'boolean',
  isFunction = func => typeof func === 'function',
  isArray = array => Array.isArray(array),
  isUndefined = data => typeof data === 'undefined',
  isObject = obj => typeof obj === 'object',
  isEmptyObject = obj => Object.keys(obj).length === 0;

export {
  isString,
  isNumber,
  isBoolean,
  isFunction,
  isArray,
  isUndefined,
  isObject,
  isEmptyObject
}