import React, { ReactChildren } from 'react';
import { Alert, AlertTitle } from '@mui/material';

interface IProps {
	variant?: 'error' | 'warning' | 'info' | 'success';
	children: ReactChildren;
}

const Message = ({ variant = 'error', children }: IProps) => {
	return (
		<Alert severity={variant}>
			<AlertTitle>{children}</AlertTitle>
		</Alert>
	);
};

export default Message;
