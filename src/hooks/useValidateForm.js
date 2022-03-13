// Validate a form field
const validateField = (field) => {
  const errors = {};
  if (field.value === '') {
    errors[field.name] = field.required === false ? null : field.required || 'Este campo es obligatorio'
  } else if (field?.value?.length < field?.min) {
    errors[field.name] = field.shortValue || `Debe tener un mínimo de ${field.min} cáracteres`
  }
  return errors;
}

// Validate a form email field
const validateEmail = (email) => {
  const errors = {},
    isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value === '') {
    errors.email = email.required || 'Por favor ingresa un correo electrónico';
  } else if (!isValidEmail.test(email.value)) {
    errors.email = email.validEmail || 'Ingresa un correo electrónico válido';
  };
  return errors;
}

// Validate a form confirm password field
const validateConfirmPassword = (password) => {
  const errors = {};

  if (password.value === '') {
    errors.confirmPassword = password.required;
  } else if (password.value !== password.linkToField) {
    errors.confirmPassword = password.messageWithoutEquality || 'Ambas contraseñas no coinciden';
  } else if ((password.value === password.linkToField) && password.value.length < password.min) {
    errors.confirmPassword = password.shortValue;
  }

  return errors;
}

const useValidateForm = () => ({
	validateField: validateField,
	validateEmail: validateEmail,
	validateConfirmPassword: validateConfirmPassword,
});

export default useValidateForm;
