const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
      },
      email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        // unique: false
       // validate: [validator.isEmail, "Please Enter a valid Email"],
      },
      phone: {
        type: Number,
        required: [true, "Please Enter Your Number"],
        minLength: [10, "Password should be greater than 8 characters"]
      },
      address: {
        type: String, 
      required: true 
    },
    status: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    // organization:{
    //   type: String,
    //   required: true
    // },
      created_at: { 
         type: Date,
         default: Date.now
         },
      updated_at: {
         type: Date,
         default: Date.now
         },
      time: {
         type: Date,
         default: Date.now
         }

  });
  
  module.exports = mongoose.model('Customer', customerSchema);
