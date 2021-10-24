/** DEPS */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** MATERIAL UI*/
import Typography from '@mui/material/Typography';

/** AB COMPONENTS */
import Paper from 'ab-components/Paper';
import Placeholder from 'ab-components/Placeholder';

/** ACTIONS */

/** STYLES */
import { withStyles } from '@mui/styles';
const styles = (theme) => ({
	root: {
		margin: '0px',
		fontWeight: 'bold',
	},
});

/** Description of the Container */
class TemplatePage extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return (
			<Paper>
				<Typography variant={'h1'} className={this.props.classes.root}>
					Template Connected Container Class
				</Typography>

				<Placeholder name={'TemplatePage'} kind={'page'} />
			</Paper>
		);
	}
}

const mapDispatchToProps = {

};

const mapStoretoProps = (store) => {
	return {

	};
};

/** PropTypes Validation */
TemplatePage.propTypes = {
	classes: PropTypes.object,
};

/** Default Props */
TemplatePage.defaultProps = {
};

/** Default Export */
export default withStyles(styles)(connect(mapStoretoProps, mapDispatchToProps)(TemplatePage));