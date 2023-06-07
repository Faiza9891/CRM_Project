const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  contact: { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' },
  opportunityName: { type: String, required: true },
  salesStage: { type: String },
  value: { type: Number },
  expectedCloseDate: { type: Date },
  assignedSalesRep: { type: String }
});

const Opportunity = mongoose.model('Opportunity', opportunitySchema);

module.exports = Opportunity;
