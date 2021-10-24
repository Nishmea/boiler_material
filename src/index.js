import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import Router from './Router';
import configureStore from './store';
import theme from './theme';

const store = configureStore({});

const renderApp = () => {
	render(
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router />
			</ThemeProvider>
		</Provider>,
		document.getElementById('root')
	);
};

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./Router', renderApp);
}

renderApp();
