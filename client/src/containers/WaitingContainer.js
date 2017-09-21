import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Paper from '../components/paperCard.js';
import RaisedButton from 'material-ui/RaisedButton'; 
import PropTypes from 'prop-types'

class WaitingContainer extends Component {
	constructor(props) {
	  super(props)
	  this.state = {
	  	white: "Harry",
	  	black: "Draco",
	  	welcomeText: 'Challenge a friend on your local device.  Use voice command to control the board!! Customize player names below and press start to begin.'
	  }
	  //bind functions 
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.chooseWhite = this.chooseWhite.bind(this);
	  this.chooseBlack = this.chooseBlack.bind(this);
	}

	chooseWhite(e) {
		e.preventDefault()
		this.props.setPlayerColor("white")
	}

	chooseBlack(e) {
		e.preventDefault()
		this.props.setPlayerColor("black")
	}
	handleChange(e, color) {
		switch (color) {
			case "black":
				this.setState({
					black: e.target.value
				})
				break;
			case "white":
				this.setState({
					white: e.target.value
				})
				break;
			default:
				break;
		}	
	}

	handleSubmit(e) {
		e.preventDefault()
		const names = {
	        white: this.state.white,
	        black: this.state.black
	      };

		this.props.updatePlayerNames(names);
		this.props.updateGameMode("multi");

		this.props.startGame();
	}

	render(){
	  return(
	  	<div>
				<div className="App-header">
				  <Link to='/'>
				  	<h2>Wizards Chess</h2>
					</Link>
				</div> 

		  	<form 
		  	  onSubmit={this.handleSubmit}
		  	  className='formFlexbox'
		  	>
		  	  <Paper
		  	    className='formFlexitem'
		  	    gameMode={this.state.gameMode}
		  	    welcomeText={this.state.welcomeText}
		  	  />

					<form 
		  	  onSubmit={this.chooseWhite}
		  	  className='formFlexbox'
		  	>
		  	  <Paper
		  	    value={this.state.white}
		  	    player='1'
		  	    className='inputName'
		  	    className='formFlexitem'
		  	    handleChange={this.handleChange}
		  	    color='white'
		  	  />
		  	  <RaisedButton
			  	  label='Choose White' 
			  	  type='submit'
		  	    className='formFlexitem'
			  	/>
			  	</form>

			  		<form 
		  	  onSubmit={this.chooseBlack}
		  	  className='formFlexbox'
		  	>
		  	  <Paper 
		  	    value={this.state.black}
		  	    player='2'
		  	    className='formFlexitem'
		  	    className='inputName'
		  	    handleChange={this.handleChange}
		  	    color='black'
  	  	  />
  	  	  <RaisedButton
			  	  label='Choose Black' 
			  	  type='submit'
		  	    className='formFlexitem'
			  	/>
			  	</form>
			  	<RaisedButton
			  	  label='Start Game' 
			  	  type='submit'
		  	    className='formFlexitem'
			  	/>
	   	  </form>

			  	{this.props.playing &&
		    		<Redirect to="/game" />
		    	}
	   </div>
	  )
	}
}

WaitingContainer.propTypes = {
	updatePlayerNames: PropTypes.func.isRequired,
	updateGameMode: PropTypes.func.isRequired
}

export default WaitingContainer;