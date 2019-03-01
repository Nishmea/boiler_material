import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './components/App';
import configureStore from './store';
import theme from './theme';

const store = configureStore({});

const renderApp = () => {
  render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
}

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', renderApp)
}

renderApp();
