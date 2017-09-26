import React, { Component } from 'react';
import Board from '../components/Board.js'

class GameContainer extends Component {

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


export default GameContainer;