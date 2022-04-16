import React, { ReactChildren } from 'react';
import { Alert, AlertTitle } from '@mui/material';

type Props = {
	variant?: 'error' | 'warning' | 'info' | 'success';
	children: ReactChildren;
};

const Message: React.FC<Props> = ({ variant = 'error', children }) => {
	return (
		<Alert severity={variant}>
			<AlertTitle>{children}</AlertTitle>
		</Alert>
	);
};

export default Message;
