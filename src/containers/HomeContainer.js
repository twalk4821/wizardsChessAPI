import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeContainer extends Component {

	render() {
		return (
			<div className="homeContainer"> 
				<div className="App-header">
				  <h1>Wizards Chess</h1>
				</div>
				<div className="mainMenu">
			    <Link to="/single" className="mainMenuItem">
		        Single Player
			    </Link> 
			    <Link to="/local" className="mainMenuItem">
		        Localhost
			    </Link> 
			    <Link to="/multi" className="mainMenuItem">
		        Multi Player
			    </Link> 
			    <Link to="/options" className="mainMenuItem">
		        Options
			    </Link> 
				</div>
			</div>
		)
	}
}


export default HomeContainer;
