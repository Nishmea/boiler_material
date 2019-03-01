import { AppBar, Toolbar } from '@material-ui/core';

const mapStateToProps = (state) => {
	return {
    currentVersion: state.version.current,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
	}
};


class App extends React.Component{
  render(){
    return(
      <React.Fragment>
				<AppBar>
					<Toolbar>
						<h1>Hello, world!</h1>
						<h2>{'v' + this.props.currentVersion}</h2>
					</Toolbar>
				</AppBar>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  version: PropTypes.string,
}

App.defaultProps = {
  version: '',
}

export default Redux.connect(mapStateToProps, mapDispatchToProps)(App);
