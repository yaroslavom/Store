import React, { useMemo } from 'react';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Box } from '@mui/system';

interface IProps {
	value: number;
	text?: any;
	color?: string;
}

const Rating = ({ value, text = '', color = '#f8e825' }: IProps) => {
	const rating = useMemo(() => {
		const stars = [];
		for (let index = 1; index <= 5; index++) {
			if (value >= index) {
				stars.push(<StarRoundedIcon key={index} sx={{ color: `${color}` }} />);
			} else if (value >= index - 0.4 && value < index) {
				stars.push(<StarHalfRoundedIcon key={index} sx={{ color: `${color}` }} />);
			} else {
				stars.push(<StarBorderRoundedIcon key={index} sx={{ color: `${color}` }} />);
			}
		}
		return stars;
	}, [value, color]);

	return (
		<>
			<Box>{rating}</Box>
			<Box display="flex" alignItems="center" ml={2}>
				{text}
			</Box>
		</>
	);
};

export default Rating;
