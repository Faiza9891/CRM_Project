const mongoose = require('mongoose');
const moment = require('moment');



const interactionSchema = new mongoose.Schema({
  customer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true }],
  interactionType: { type: String, required: true },
  // dateTime: { type: Date},
  dateTime: {
    type: Date,
    default: Date.now,
  },
  description: { type: String },
  outcome: { type: String }
});
interactionSchema.methods.getFormattedDate = function() {
  return moment(this.dateTime).format('DD/MM/YY');
};
const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;
