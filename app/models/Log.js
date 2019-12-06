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
}, {capped: {size: 5242880, max: 10000 }} );

// max = maximum number of documents
// size = maximum size of collection in bytes

mongoose.model('logs', LogSchema);