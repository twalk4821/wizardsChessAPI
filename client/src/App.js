import React, { Component } from 'react';
import Routes from './Routes.js'
import './App.css';

import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerNames: {
        white: "",
        black: ""
      },
      gameMode: "single",
      rooms: [],
      room: null,
      playing: false,
      playerColor: "white",
      lastMove: null
    }
    this.updatePlayerNames = this.updatePlayerNames.bind(this)
    this.updateGameMode = this.updateGameMode.bind(this)
    this.createRoom = this.createRoom.bind(this)
    this.joinRoom = this.joinRoom.bind(this)
    this.startGame = this.startGame.bind(this)
    this.updatePublicGameList = this.updatePublicGameList.bind(this)
    this.setPlayerColor = this.setPlayerColor.bind(this)
    this.nextTurn = this.nextTurn.bind(this)
    this.updateLastMove = this.updateLastMove.bind(this)


    socket.on('update public', this.updatePublicGameList)
    socket.on('start', data => this.setState({playing: true}))
    socket.on('successfully joined', roomName => this.setState({room: roomName}))
    socket.on('update game', move => {
      console.log("updating game", move)
      this.updateLastMove(move)
    })

  }

  createRoom(room) {
    socket.emit('create', room)
  }

  joinRoom(room) {
    socket.emit('join', room)
  }

  startGame() {
    socket.emit('start', this.state.room)
  }

  updatePublicGameList() {
    fetch('/rooms')
    .then(data => data.json())
    .then(rooms => this.setState({
      rooms: rooms
    }))  
  }

  updatePlayerNames(names) {
      this.setState({
        playerNames: names
      })
  }

  updateGameMode(mode) {
    this.setState({
      gameMode: mode
    })
  }

  updateLastMove(move) {
    this.setState({
      lastMove: move
    })
  }

  setPlayerColor(color) {
    this.setState({
      playerColor: color
    })
  }

  nextTurn(move, roomName) {
    console.log("next turn", move, roomName);
    let data = {
      room: roomName,
      move: move
    }
    socket.emit('next', data)
  }



  render() {
    return (
      <div className="App">
        <Routes 
        updatePlayerNames={this.updatePlayerNames} 
        updateGameMode={this.updateGameMode}
        updatePublicGameList={this.updatePublicGameList}
        setPlayerColor={this.setPlayerColor}
        createRoom={this.createRoom}
        joinRoom={this.joinRoom}
        startGame={this.startGame}
        nextTurn={this.nextTurn}
        playerNames={this.state.playerNames}
        gameMode={this.state.gameMode}
        rooms={this.state.rooms}
        room={this.state.room}
        playing={this.state.playing}
        playerColor={this.state.playerColor}
        lastMove={this.state.lastMove}
        />
      </div>
    );
  }
}

export default App;
