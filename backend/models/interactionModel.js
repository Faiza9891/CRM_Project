const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  interactionType: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
  description: { type: String },
  outcome: { type: String }
});

const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;
