const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  contact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  activityType: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
  description: { type: String },
  assignedUser: { type: String },
  status: { type: String }
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
