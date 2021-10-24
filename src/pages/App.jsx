import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AppBar, Toolbar } from '@mui/material';

class App extends React.Component{
	render(){
		return (
			<AppBar>
				<Toolbar>
					<h1>Hello, world!</h1>

					<h2>{'v' + this.props.currentVersion}</h2>
				</Toolbar>
			</AppBar>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentVersion: state.version.current,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

App.propTypes = {
	currentVersion: PropTypes.string,
};

App.defaultProps = {
	currentVersion: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
