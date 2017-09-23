import React, { Component } from 'react';
import Routes from './Routes.js'
import { withRouter } from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerNames: {
        white: "",
        black: ""
      },
      gameMode: "single"
    }
    this.updatePlayerNames = this.updatePlayerNames.bind(this)
    this.updateGameMode = this.updateGameMode.bind(this)
  }

  componentDidMount() {
  }

  updatePlayerNames(names) {
      this.props.actions.updateNames(names)
  }

  updateGameMode(mode) {
    this.setState({
      gameMode: mode
    })
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div className="App">
        <Routes 
        updatePlayerNames={this.updatePlayerNames} 
        updateGameMode={this.updateGameMode}
        playerNames={this.state.playerNames}
        gameMode={this.state.gameMode}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playerNames: state.playerNames
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
