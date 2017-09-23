import React, { Component } from 'react';
import '../public/style.css'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

import PropTypes from 'prop-types'

import Square from './Square.js'
import Algebra from './Algebra.js'
import Hud from '../components/Hud.js'

import chessBoard from '../classes/board.js'
import ai from '../classes/ai.js'

class Board extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeSquare: null,
			activeMoveset: null,
			targetSquares: [],
			attackSquares: []
		}

		this.toggleActive = this.toggleActive.bind(this)
		this.setActiveSquare = this.setActiveSquare.bind(this)
		this.executeCommand = this.executeCommand.bind(this)
	}

	componentDidMount() {
		this.props.board.updateAvailableMoves("white")
	}

	componentDidUpdate(prevProps) {
		if (this.props.board.isCheck(this.props.turn)) {
			this.props.board.isCheckmate(this.props.turn) ?
				this.message.textContent = "Checkmate!!!" :
				this.message.textContent = "Check.";
		}

		this.props.board.updateAvailableMoves(this.props.turn)

		if (this.props.turn === "black" && 
			prevProps.turn === "white" &&
			this.props.gameMode === "single") {
			setTimeout(function() {
				let aiMove = ai.getBestMove(this.props.board, 2);
				this.move(aiMove.piece, aiMove.destination);	
			}.bind(this), 1500)			
		}	
	}

	toggleActive(square) {
		let activeSquare = this.state.activeSquare

		if (!activeSquare) {
			if (!square.props.piece) return;
			if (!(square.props.piece.color === this.props.turn)) return;
			this.setActiveSquare(square)
			this.setTargetSquares(square.props.piece)
		} else {
			if (square.isEqualTo(activeSquare)) {
				this.setActiveSquare(null)
				this.clearTargetSquares()
			} else {
				if (!square.props.piece || square.props.piece.color !== activeSquare.props.piece.color) {
					this.move(activeSquare.props.piece, square.props.pos)
				} else if (square.props.piece.color === activeSquare.props.piece.color) {
					this.setActiveSquare(square)
					this.setTargetSquares(square.props.piece)
				}
			}
		}
	}
		
	setActiveSquare(square) {
		this.setState({
			activeSquare: square,
			activeMoveset: square ? square.props.piece.calculateMoveset(this.props.board) : []
		})

	}

	setTargetSquares(piece) {
		let targetSquares = [];
		let attackSquares = [];
		let board = this.props.board;
		for (let move of piece.availableMoves) {
			if (board.getPieceAtLocation(move.x, move.y)) {
				attackSquares.push(this.refs[move.x + ',' + move.y])
			} else {
				targetSquares.push(this.refs[move.x + ',' + move.y])
			}
		}
		this.setState({
			targetSquares: targetSquares,
			attackSquares: attackSquares
		})
	}

	clearTargetSquares() {
		this.setState({
			targetSquares: [],
			attackSquares: []
		})
	}

	executeCommand(command) {
		command = command.split(" ");

		const piece = command[0];
		const pieceType = piece.charAt(0).toLowerCase() + piece.slice(1)

		const livePiecesForCurrentPlayer = this.props.board.livePieces[this.props.turn];

		const location = command[2].split("");
		const destination = {
			x: location[0].charCodeAt(0) - 65,
			y: parseInt(location[1], 10)-1
		};

		const validTargets = []
		for (let livePiece of livePiecesForCurrentPlayer[pieceType]) {
			const moveset = livePiece.availableMoves
			if (this.props.board.destinationInMoveset(destination, moveset) &&
				!this.props.board.movingIntoCheck(livePiece, destination, this.props.turn)) {
				validTargets.push(livePiece)
			}
		}

		if (validTargets.length === 1) {
			return this.move(validTargets[0], destination)
		} else if (validTargets.length === 0) {
			this.message.textContent = "That command is not associated with any available moves.";
			return false
		} else {
			this.message.textContent = "That command is associated with multiple targets. Please move manually for now.";
			return false
		}
	}

	move(piece, destination) {
		const moveset = piece.availableMoves
		if (this.props.board.destinationInMoveset(destination, moveset)) {

			if (this.props.board.movingIntoCheck(piece, destination, this.props.turn)) {
				this.message.textContent = "Can't move into check";
				return false
			}

			this.props.board.move(piece, destination) 

			piece.hasMoved = true;

			this.setActiveSquare(null)
			this.clearTargetSquares()
			this.message.textContent = ""

			this.props.actions.updateGameState({
				board: this.props.board,
				turn: this.props.turn === "white" ? "black" : "white",
				lastMove: [piece, destination],
				turnCount: this.props.turn === "black" ? this.props.turnCount + 1 : this.props.turnCount
			})

			return true	
		}
		else {
			this.message.textContent = "Not a valid move.";
			this.setActiveSquare(null)
			return false
		}


	}


	render() {
		var Squares = [];
		for (var i = 7; i>=-1; i--) {
			for (var j = -1; j < 8; j++) {
				if (i === -1 || j === -1) {
					const square = <Algebra pos= {{x:j, y:i}} key={j + "," + i}/>
					Squares.push(square)
				} else {
					const square = <Square 
									piece={this.props.board.getPieceAtLocation(j, i)} 
									toggle={this.toggleActive} 
									pos={{x:j, y:i}} 
									activeSquare={this.state.activeSquare} 
									targetSquares={this.state.targetSquares}
									attackSquares={this.state.attackSquares}
									key={j + "," + i} 
									ref={j + "," + i} />
					Squares.push(square);
				}
				
			}
		}
	
		return (
				<div>
			<h2 ref={message=> {this.message = message }} className="message"> </h2>
			<div className="playArea">
				<div className="board">
					{Squares}
				</div>
				<Hud executeCommand={this.executeCommand} />
			</div>
			</div>
		)
	}
}

Board.propTypes = {
	playerNames: PropTypes.objectOf(PropTypes.string).isRequired,
	gameMode: PropTypes.oneOf(['single', 'local', 'multi']).isRequired,
	board: PropTypes.object.isRequired,
	turn: PropTypes.oneOf(['white', 'black']).isRequired,
	turnCount: PropTypes.number.isRequired,
	lastMove: PropTypes.array

}

function mapStateToProps(state) {
  return {
    playerNames: state.playerNames.names,
    gameMode: state.gameMode.mode,
    board: state.gameState.board,
    turn: state.gameState.turn,
    lastMove: state.gameState.lastMove,
    turnCount: state.gameState.turnCount
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)