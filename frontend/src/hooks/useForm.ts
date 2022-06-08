import { useState } from 'react';

export function useForm(initialFieldValues: any) {
	const [values, setValues] = useState(initialFieldValues);
	const [errors, setErrors] = useState({});

	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const resetForm = () => {
		setValues(initialFieldValues);
		setErrors({});
	};

	return {
		values,
		setValues,
		errors,
		setErrors,
		handleInputChange,
		resetForm,
	};
}
