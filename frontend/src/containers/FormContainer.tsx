import React from 'react';

const FormContainer = (props: any) => {
	const { children, onSubmit, ...other } = props;
	return (
		<form name="login" className="flexContainer-column" onSubmit={(e) => onSubmit(e)} {...other}>
			{children}
		</form>
	);
};

export default FormContainer;
