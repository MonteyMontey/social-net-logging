const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  type: {
    type: String
  },
  log: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('logs', LogSchema);