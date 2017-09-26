import React, { Component } from 'react';
import Routes from './Routes.js'
import { withRouter } from 'react-router-dom';
// import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
