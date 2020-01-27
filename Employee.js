const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
	required: true
  },
  state: {
    type: String,
	required: true
  },
  zip: {
    type: Number,	
	required: true
  },
  phone: {
    type: Number,
    required: true
  }
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);
