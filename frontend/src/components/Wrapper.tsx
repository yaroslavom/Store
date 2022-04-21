import Container from '@mui/material/Container';
import { styled } from '@mui/system';
import { ReactNode } from 'react';

const StyledWrapper = styled(Container)(({ theme }) => ({
	width: 'auto',
	margin: '16px 60px',
	[theme.breakpoints.down('md')]: {
		margin: '0',
	},
}));

export const Wrapper: React.FC<ReactNode> = ({ children }) => {
	return <StyledWrapper maxWidth={false}>{children}</StyledWrapper>;
};
