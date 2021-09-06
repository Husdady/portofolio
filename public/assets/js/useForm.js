/* React components */
import { useState } from 'react';
/* Custom hooks */
import { validateField, validateConfirmPassword, validateEmail } from './validationForm';
import { isFunction, isObject, isEmptyObject } from './typeof';

const useForm = ({
	initialValues,
	validationSchema,
	validate,
	validateOnChange = true,
	validateAllFields = false,
	onSubmit
}) => {

	const [values, setValues] = useState(initialValues),
		[errors, setErrors] = useState({}),

		getRulesSchema = validationSchema ? Object.values(validationSchema) : [],
		getPropertiesNameSchema = validationSchema ? Object.getOwnPropertyNames(validationSchema) : [],
		getPropertiesValues = Object.getOwnPropertyNames(initialValues),

		runValidationRules = (property, value) => {
				let result;
				const getProperty = validationSchema[property];
				if (getProperty?.isEmail) {
					result = validateEmail({
						value,
						required: getProperty.required,
						validEmail: getProperty.validEmail
					});
				} else if (getProperty?.isConfirmPassword) {
					const existMinRule = validationSchema[getProperty.linkToField].min;
					const min = existMinRule && existMinRule.limit;
					result = validateConfirmPassword({
						value,
						linkToField: values[getProperty.linkToField],
						messageWithEquality: getProperty.messageWithEquality,
						messageWithoutEquality: getProperty.messageWithoutEquality,
						min: existMinRule && (existMinRule.limit || existMinRule),
						shortValue: existMinRule && (isFunction(existMinRule.message) ? existMinRule.message(min) : existMinRule.message)
					});
				} else {
					const existMinRule = getProperty?.min;
					const min = existMinRule?.limit;
					const message = existMinRule?.message;
					result = validateField({
						name: property,
						value,
						required: getProperty?.required,
						min: min || existMinRule,
						shortValue: existMinRule && (isFunction(message) ? message(min) : message)
					});
				}
				return result;
		},

		runValidationSchema = result => {
			setErrors(result);
			isEmptyObject(result) && onSubmit({
				values,
				resetForm
			});
		},

		deleteUndefinedErrors = (result, property) => {
			if (isEmptyObject(result)) {
				const deleteProperty = { ...errors };
				delete deleteProperty[property];
				!isEmptyObject(errors) && setErrors(deleteProperty);
			} else {
				setErrors({ ...errors, [property]: result[property] });
			}
		},

		runValidationErrors = ({ property, value, allValues }) => {
			const getErrors = validateAllFields ? validate(allValues) : validate(property, value);
			return getErrors;
		},

		runValidateAllFields = () => {
			let result;
			if (validationSchema) {
				result = getRulesSchema.reduce((acc, _, i) => {
					const property = getPropertiesNameSchema[i];
					const getValidationResult = runValidationRules(property, values[property]);
					return { ...acc, ...getValidationResult };
				}, {});
			} else if (validate) {
				result = getPropertiesValues.reduce((acc, property) => {
					const getErrors = runValidationErrors({
						property,
						value: values[property],
						allValues: values
					});
					return { ...acc, ...getErrors };
				}, {});
			}
			runValidationSchema(result);
		},

		setFieldValue = (property, value) => {
			const fieldValue = { ...values, [property]: value };
			setValues(fieldValue);
			if (validateOnChange) {
				let deleteErrors;
				if (validationSchema) {
					deleteErrors = runValidationRules(property, value);
				} else if (validate) {
					const getErrors = runValidationErrors({
						property,
						value,
						allValues: fieldValue
					});
					deleteErrors = getErrors;
					isObject(getErrors) && setErrors(getErrors);
				}
				deleteUndefinedErrors(deleteErrors, property);
			}
		},

		multipleSetField = fields => setValues({...values, ...fields}),

		handleSubmit = e => {
			e.preventDefault();
			return runValidateAllFields();
		},

		resetForm = () => {
			setValues(initialValues);
			setErrors({});
		}

	return {
		values,
		setFieldValue,
		multipleSetField,
		errors,
		setErrors,
		handleSubmit,
		resetForm
	}
}

export default useForm;
