import React, { Component } from 'react';
import Board from '../components/Board.js'

import PropTypes from 'prop-types'

class GameContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="gameContainer">
				<Board 
				ref ="board" 
				/>
			</div>
		)
	}
}

GameContainer.propTypes = {
	playerNames: PropTypes.objectOf(PropTypes.string).isRequired,
	gameMode: PropTypes.oneOf(["single", "local", "multi"])
}

export default GameContainer;