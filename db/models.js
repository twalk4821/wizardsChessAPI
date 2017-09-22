const mongoose = require('./index.js');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const roomSchema = new Schema({
	id: ObjectId,
	name: String,
	users: Array
});

roomSchema.query.byName = function(name) {
  return this.find({ name: new RegExp(name, 'i') });
};

const Room = mongoose.model('Room', roomSchema);

module.exports = {
	Room: Room
};
