import React from 'react';
import {
	FormControl,
	Select as Selection,
	MenuItem,
	FormHelperText,
	SelectChangeEvent,
} from '@mui/material';

interface Props {
	changeHandler: (
		event: SelectChangeEvent<React.SetStateAction<number | string>>,
		child: React.ReactNode,
	) => void;
	selected: React.SetStateAction<string | number>;
	items: number | [number | string];
	helpText?: string;
}

const Select: React.FC<Props> = ({ changeHandler, selected, items, helpText }) => {
	return (
		<FormControl sx={{ my: 1, minWidth: 80 }}>
			<Selection
				value={selected}
				onChange={changeHandler}
				displayEmpty
				inputProps={{ 'aria-label': 'Without label', sx: { p: '8.5px 14px' } }}
			>
				{typeof items === 'number' &&
					[...Array(items).keys()].map((el) => (
						<MenuItem key={el} value={++el}>
							{el}
						</MenuItem>
					))}
			</Selection>
			<FormHelperText>{helpText}</FormHelperText>
		</FormControl>
	);
};

export default Select;
