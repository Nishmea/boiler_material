import { createMuiTheme } from '@material-ui/core/styles';

import { red, green, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
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
