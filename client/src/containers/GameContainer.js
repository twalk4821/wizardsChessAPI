import React, { Component } from 'react';
import Board from '../components/Board.js'

import PropTypes from 'prop-types'

class GameContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			turn: "white"
		}
		this.nextTurn = this.nextTurn.bind(this)
	}

	nextTurn(move) {
		let turn = this.state.turn === "white" ? "black" : "white"
		this.props.nextTurn(move, this.props.room)
		this.setState({
			turn: turn
		})
	}

	render() {
		console.log(this.props.playerColor)
		const playerName = this.state.turn === "white" ? this.props.playerNames.white : this.props.playerNames.black
		return (
			<div className="gameContainer">
				<Board 
				ref ="board" 
				nextTurn = {this.nextTurn} 
				turn = {this.state.turn}
				gameMode = {this.props.gameMode}
				playerColor = {this.props.playerColor}
				playerNames={this.props.playerNames}
				lastMove={this.props.lastMove}
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