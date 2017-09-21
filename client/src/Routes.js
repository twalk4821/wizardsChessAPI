import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer.js'
import GameContainer from './containers/GameContainer.js'
import SingleContainer from './containers/SingleContainer.js'
import LocalContainer from './containers/LocalContainer.js'
import MultiContainer from './containers/MultiContainer.js'
import OptionsContainer from './containers/OptionsContainer.js'
import WaitingContainer from './containers/WaitingContainer.js'

export default (props) => (
  <Switch>
	  <Route path="/game" exact render={() => (
	  	<GameContainer 
	  	playerNames={props.playerNames}
	  	gameMode={props.gameMode}
	  	room={props.room}
	  	playerColor={props.playerColor}
	  	/>
	  )} />
  

	  <Route path="/single" exact render={() => (
	  	<SingleContainer 
	  	updatePlayerNames={props.updatePlayerNames} 
	  	updateGameMode={props.updateGameMode} />
	  )}/>

	  <Route path="/local" exact render={() => (
	  	<LocalContainer 
	  	updatePlayerNames={props.updatePlayerNames}
	  	updateGameMode={props.updateGameMode} 
	  	/>
	  )}/>

	  <Route path="/multi" exact render={() => (
	  	<MultiContainer 
	  	updatePlayerNames={props.updatePlayerNames} 
	  	updatePublicGameList={props.updatePublicGameList}
	  	createRoom={props.createRoom}
	  	joinRoom={props.joinRoom}
	  	rooms={props.rooms}
	  	room={props.room}
	  	/>
	  )}/>

	  <Route path="/waiting" exact render={() => (
	  	<WaitingContainer 
	  	updatePlayerNames={props.updatePlayerNames}
	  	updateGameMode={props.updateGameMode}
	  	setPlayerColor={props.setPlayerColor}
	  	playing={props.playing}
	  	startGame={props.startGame}
 
	  	/>
	  )}/>

	  <Route path="/options" exact render={() => (
	  	<OptionsContainer />
	  )}/>

	  { /* Finally, catch all unmatched routes */ }
	    <Route path="/" render={() => (
	  		<HomeContainer />
	  	)}/>
  </Switch>
);