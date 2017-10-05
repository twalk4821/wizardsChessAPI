import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './GameOver.css';

import PropTypes from 'prop-types';

const GameOver = (props) => {
	console.log(props)
	let winner = props.turn === "white" ? 
	props.playerNames.black : 
	props.playerNames.white
	return (
		<div className="gameOver">
			<h1>{winner} wins!</h1>
			<div className="options">
				<button onClick={props.startOver}>
					Play Again?
				</button>
				<button>
					<Link to='/home'>Go back</Link>
				</button>
			</div>
		</div>
	)

}


GameOver.propTypes = {
	playerNames: PropTypes.objectOf(PropTypes.string).isRequired,
	turn: PropTypes.string.isRequired,
	startOver: PropTypes.func.isRequired
}


export default connect((state)=> state)(GameOver)