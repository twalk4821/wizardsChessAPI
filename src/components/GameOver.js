import React from 'react';

import './GameOver.css';

import PropTypes from 'prop-types';

const GameOver = (props) => {
	let winner = this.props.turn === "white" ? 
	this.props.playerNames.black : 
	this.props.playerNames.white
	return (
		<div className="gameOver">
			{winner} wins!
		</div>
	)

}


GameOver.propTypes = {
	playerNames: PropTypes.objectOf(PropTypes.string).isRequired,
	turn: PropTypes.string.isRequired
}


export default GameOver