const express = require('express');
const { resolve } = require('path');

const port = process.env.PORT || 3001

const app = express();

app.use('/', express.static(resolve(__dirname, '../src/public')));

app.get('*', (req, res) => {
	res.redirect('/');
})

app.listen(port, () => {
  console.log('App is listening to port ' + port);
})

module.exports = app;