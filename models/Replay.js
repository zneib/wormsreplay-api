const mongoose = require('mongoose');

const ReplaySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
  }
});

module.exports = mongoose.model('Replay', ReplaySchema);