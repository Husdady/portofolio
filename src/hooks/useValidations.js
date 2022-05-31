// Check if it is a string
export function isString(str) {
  return typeof str === 'string'
}

// Check if it is a empty string
export function isEmptyString(str) {
  return isString(str) && str.length === 0
}

// Check if it is a number
export function isNumber(num) {
  return typeof num === 'number'
}

// Check if it is a boolean value
export function isBoolean(boolean) {
  return typeof boolean === 'boolean'
}

// Check if it is a function
export function isFunction(func) {
  return typeof func === 'function'
}

// Check if it is a array
export function isArray(array) {
  return Array.isArray(array)
}

// Check if it is a empty array
export function isEmptyArray(array) {
  return isArray(array) && array.length === 0
}

// Check if it is a undefined value
export function isUndefined(value) {
  return typeof value === 'undefined'
}

// Check if it is a object
export function isObject(obj) {
  return typeof obj === 'object'
}

// Check if it is a empty object
export function isEmptyObject(obj) {
  return isObject(obj) && Object.keys(obj).length === 0
}

// Check if length of a string is less than the asigned value
export function isLessThan({ value, min }) {
  const validTypes = isString(value) || isArray(value)

  return validTypes && isNumber(min) && value.length < min
}

// Check if length of a string is greater than the asigned value
export function isGreaterThan({ value, max }) {
  return isString(value) && isNumber(max) && value.length > max
}

// Comprobar si es un correo electrónico
export function isEmail(email) {
  const verifyEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (verifyEmail.test(email)) return true

  return false
}

// Comprobar si es un campo válido de un formulario
export function validateSchemaField(field) {
  // Errores de la validación
  const errors = {}

  // Validar regla 'min' del esquema
  const minValidation = isLessThan({
    value: field.value,
    min: field.min.limit,
  })

  // Validar regla 'max' del esquema
  const maxValidation = isGreaterThan({
    value: field.value,
    max: field.max.limit,
  })

  // Comprobar si existe la regla 'required' en el esquema
  if (!field.value || isEmptyArray(field.value)) {
    // Si el campo no tiene valor
    field.required && (errors[field.name] = field.required)

    // Setear un mensaje por defecto para el campo email
    field.name === 'email' && (errors[field.name] = field.required || 'Please enter an email')

    // Comprobar si existe la regla 'min' en el esquema
  } else if (minValidation) {
    if (field.min.limit) {
      const minMessage = `Must have a minimum of ${field.min.limit} characters`

      errors[field.name] = field.min.message || minMessage
    }

    // Comprobar si existe la regla 'max' en el esquema
  } else if (maxValidation) {
    if (field.max.limit) {
      const maxMessage = `The maximum length of ${field.max.limit} characters has been exceeded`

      errors[field.name] = field.max.message || maxMessage
    }

    // Comprobar si existe la regla 'isEmail' en el esquema
  } else if (field.isEmail) {
    // Si no es un email válido
    if (!isEmail(field.value)) {
      errors[field.name] = 'Please enter a valid email'
    }

    // Comprobar si existe la regla 'isMatchPassword' en el esquema
  } else if (field.isMatchPassword) {
    if (field.value !== field.isMatchPassword.value) {
      errors[field.name] = 'Both passwords do not match'
    }
  }

  return errors
}

export default function useValidations() {
  return {
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
    validateSchemaField: validateSchemaField,
  }
}
