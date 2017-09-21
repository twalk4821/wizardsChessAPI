import React, { Component } from 'react';
import MultiplayerHeader from '../components/multiplayerHeader.js';
import RaisedButton from 'material-ui/RaisedButton'; 
import { Redirect } from 'react-router-dom';

class MultiContainer extends Component {
	constructor(props) {
	  super(props)
	  this.state = {
	  	createRoomName: "Create Room",
	  	joinRoomName: "Join Room",
	  	redirect: false,
	  	rooms: []
	  }
	  //bind functions
	  this.handleChangeCreate = this.handleChangeCreate.bind(this)
	  this.handleChangeJoin = this.handleChangeJoin.bind(this)
	  this.create = this.create.bind(this)
	  this.join = this.join.bind(this)

	}

	

	componentDidMount() {
		this.props.updatePublicGameList()
	}

	handleChangeCreate(e, color) {
		this.setState({
			createRoomName: e.target.value
		})
	}

	handleChangeJoin(e, color) {
		this.setState({
			joinRoomName: e.target.value
		})
	}

	create() {
		let room = {
			name: this.state.createRoomName,
			users: []
		}
		this.props.createRoom(room)
		this.props.joinRoom(room)
		this.setState({
			redirect: true
		})
	}

	join(e) {
		e.preventDefault()
		let room = {
			name: this.state.joinRoomName,
			users: []
		}
		this.props.joinRoom(room)

	}
	render() {

	  return(
	  	<div className="multiContainer" ref="multi">
	  	  <div className="App-header">
	  	    <h2>Wizards Chess</h2>
	  	  </div>
	      <h1>Multi Player</h1>
	      <form 
		  	  onSubmit={this.create}
		  	  className='formFlexbox'
		  	>
	      <MultiplayerHeader 
	        type='Host'
	        value={this.state.createRoomName}
	        message='Create a gameroom and challenge opponents in public and private matches'
	        handleChange={this.handleChangeCreate}
	      />
	      <RaisedButton
			  	  label='Create' 
			  	  type='submit'
		  	    className='formFlexitem'
			/>
			</form>

			<form 
		  	  onSubmit={this.join}
		  	  className='formFlexbox'
		  	>
	      <MultiplayerHeader 
	        type='Join'
	        value={this.state.joinRoomName}
	        message='Join a currently open gameroom to challenge or observe'
	        handleChange={this.handleChangeJoin}
	      />
	        <RaisedButton
			  	  label='Join' 
			  	  type='submit'
		  	    className='formFlexitem'
			/>
			</form>

	      <ul>
	      	{this.props.rooms.map((room) => (
	      		<li>
		      		{
		      			room.name ? room.name : room.id
		      		}
	      		</li>
	      	))}
	      </ul>

	      {this.props.room && 
	      	<Redirect to="/waiting" />
	      }
	    </div>
	  )
	}
}

export default MultiContainer;