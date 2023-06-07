const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  jobTitle: { type: String },
  department: { type: String },
  notes: { type: String }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
