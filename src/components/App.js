import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { AppBar, Toolbar, Button } from '@material-ui/core';

function Home() {
	return(
		<h1>Home</h1>
	);
}

function About() {
	return(
		<h1>About</h1>
	);
}

class App extends React.Component{
  render(){
    return(
      <Router>
				<React.Fragment>
					<AppBar color="primary" position="sticky">
						<Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
							<h1>Hello, world!</h1>
							<h2>{'v' + this.props.currentVersion}</h2>
							<Button variant="contained" color="secondary" component={Link} to="/">
								Home
							</Button>
							<Button variant="contained" color="secondary" component={Link} to="/about">
								About
							</Button>
						</Toolbar>
					</AppBar>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
	return {
    currentVersion: state.version.current,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
	}
};

App.propTypes = {
  version: PropTypes.string,
}

App.defaultProps = {
  version: '',
}

export default Redux.connect(mapStateToProps, mapDispatchToProps)(App);
