// Check if it is a string
function isString(str) {
	return typeof str === 'string';
}

// Check if it is a empty string
function isEmptyString(str) {
	return isString(str) && str.length === 0;
}

// Check if it is a number
function isNumber(num) {
	return typeof num === "number";
}

// Check if it is a boolean value
function isBoolean(boolean) {
	return typeof boolean === "boolean";
}

// Check if it is a function
function isFunction(func) {
	return typeof func === "function";
}

// Check if it is a array
function isArray(array) {
	return Array.isArray(array);
}

// Check if it is a empty array
function isEmptyArray(array) {
	return isArray(array) && array.length === 0;
}

// Check if it is a undefined value
function isUndefined(value) {
	return typeof value === "undefined";
}

// Check if it is a object
function isObject(obj) {
	return typeof obj === "object";
}

// Check if it is a empty object
function isEmptyObject(obj) {
	return isObject(obj) && Object.keys(obj).length === 0;
}

const useValidations = () => ({
	isString: isString,
	isEmptyString: isEmptyString,
	isNumber: isNumber,
	isBoolean: isBoolean,
	isFunction: isFunction,
	isArray: isArray,
	isEmptyArray: isEmptyArray,
	isUndefined: isUndefined,
	isObject: isObject,
	isEmptyObject: isEmptyObject,
});

export default useValidations;
