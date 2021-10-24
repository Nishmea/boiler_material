import { createTheme } from '@mui/material/styles';

import { red, green, blue } from '@mui/material/colors';

const theme = createTheme({
	typography: {
		fontFamily: 'Roboto, sans-serif',
		useNextVariants: true,
	},
	palette: {
		primary: {
			main: blue[600],
		},
		secondary: {
			main: green[600],
		},
		error: {
			main: red[600],
		},
	},
});

export default theme;
