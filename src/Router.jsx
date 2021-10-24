/** DEPS */
import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

/** PAGES */
import App from './pages/App';

/** PROP VALIDATION */
Router.propTypes = {
};

/** PROP DEFAULTS */
Router.defaultProps = {
};

/** Used for quickly templating a new component.
 * @visibleName Template
*/
function Router(props) {
	return (
		<HashRouter>
			<Switch>
				<Route 
					path={'/'}
					exact
					component={App}
				/>
			</Switch>
		</HashRouter>
	);
}

export default Router;