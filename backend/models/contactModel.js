const mongoose = require('mongoose');
const  mongoosePaginate = require("mongoose-paginate");


const contactSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, 
  ref: 'Customer',
  required:true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  jobTitle: { type: String },
  department: { type: String },
  notes: { type: String }
});
contactSchema.plugin(mongoosePaginate);
const Contact = mongoose.model('Contact', contactSchema);


module.exports = Contact;

