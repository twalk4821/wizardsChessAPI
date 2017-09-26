var express = require('express')
var bodyParser = require('body-parser');
const { resolve } = require('path');

var models = require('../db/models.js');

var port = process.env.PORT || 3001

var app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(resolve(__dirname, '../src/public')));

console.log('apsdfokjaspodfj', resolve(__dirname, '../src/public'));

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

module.exports = app;