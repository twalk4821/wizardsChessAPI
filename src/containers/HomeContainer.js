import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chess from '../public/chess.svg'

class HomeContainer extends Component {

	render() {
		return (
			<div className="homeContainer"> 
				<div className="homeContainerItem homeContainerHeader">
				  <h1 className="App-header">Wizards Chess</h1>
				</div>
				<div className="homeContainerItem homeContainerMenu">
					<div className="mainMenu">
				    <Link to="/single" className="mainMenuItem">
			        <div>Single Player</div>
			        <img src={chess} style={{height: '1em'}} />
				    </Link> 
				    <Link to="/local" className="mainMenuItem">
			        Localhost
			        <div>
			        <span>
			        <img src={chess} style={{height: '1em'}} />
			        </span>
			        <span>
			        <img src={chess} style={{height: '1em'}} />
			        </span>
			        	
			        </div>
				    </Link> 
			    <Link to="/" className="mainMenuItem">
		        Multi Player
			      <div>
			        <h6>Coming Soon</h6>
			      </div>
			    </Link> 
					</div>
				</div>
			</div>
		)
	}
}


export default HomeContainer;
			    // <Link to="/options" className="mainMenuItem">
		     //    Options
			    //     <div>
				   //      <img src={chess} style={{height: '1em'}} />
			    //     </div>
			    // </Link> 
