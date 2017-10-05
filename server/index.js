const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');

const models = require('../db/models.js');

const port = process.env.PORT || 3001

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(resolve(__dirname, '../src/public')));

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

app.get('*', (req, res) => {
	res.redirect('/');
})

app.listen(port, () => {
  console.log('App is listening to port ' + port);
})

module.exports = app;