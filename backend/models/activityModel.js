const mongoose = require('mongoose');
const  mongoosePaginate = require("mongoose-paginate");

const activitySchema = new mongoose.Schema({
  customer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' ,
required:true
}],
  contact: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
  activityType: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
  description: { type: String },
  assignedUser: { type: String },
  status: { type: String }
});
activitySchema.plugin(mongoosePaginate);
const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
