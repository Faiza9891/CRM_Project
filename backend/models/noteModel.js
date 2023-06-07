const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  contact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  text: { type: String, required: true },
  dateTime: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
