var express = require('express')
var bodyParser = require('body-parser');
var path = require('path');

var models = require('./db/models.js');

var port = process.env.PORT || 3001

var app = express();
var server = require('http').createServer(app);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '/client/public')))

app.get('/rooms/', (req, res) => {
	let Room = models.Room
	Room.find()
	.then((doc) => res.send(doc))
})

app.get('/rooms/:name', (req, res) => {
	let Room = models.Room
	Room.find().byName(req.params.id)
	.then((doc) => console.log(doc))
})

app.post('/rooms', (req, res) => {
	let Room = models.Room
	let room = new Room({
		name: req.body.name,
		users: req.body.users
	})
	room.save()
	.then((doc) => console.log(doc))
})

app.delete('/rooms/:name', (req, res) => {
	let Room = models.Room
	Room.remove({ name: 'diagon alley'})
	.then(()=> Room.find())
	.then((doc) => console.log(doc))
})

app.listen(port, () => {
  console.log('App is listening to port ' + port);
})

//MARK: SOCKETS
server.listen("3001", "localhost");
var io = require('socket.io')(server);
var Rooms = {};

io.on('connection', (socket) => {
	console.log('a user connected to the socket');

	socket.on('create', (data) => {
		var roomName = data.name
		if (Rooms[roomName]) {
			console.log("room " + roomName + " already exists")
		} else {
			Rooms[roomName] = []
			var Room = models.Room
			var room = new Room({
				name: roomName,
				users: []
			})

			room.save()
			.then(() => io.emit('update public'))
		}
		
	})

	socket.on('join', (data) => {
		var roomName = data.name
		if (Rooms[roomName]) {
			socket.join(roomName)
			Rooms[roomName].push(socket)
			io.to(roomName).emit('successfully joined', roomName)
		} else {
			console.log("could not join: ", roomName)
		}
		
	})

	socket.on('start', (roomName) => {
		io.to(roomName).emit('start')
	})

	socket.on('next', (data) => {
		console.log('nexting', data)
		var roomName = data.room
		var move = data.move
		io.to(roomName).emit('update game', move)
	})
})

module.exports = app;