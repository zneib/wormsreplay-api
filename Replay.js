const mongoose = require('mongoose');

const ReplaySchema = new mongoose.Schema({
  gameType: {
    type: String,
  },
  teams: {
    redTeam: {
      type: Array
    },
    blueTeam: {
      type: Array
    },
    greenTeam: {
      type: Array
    },
    yellowTeam: {
      type: Array
    },
    cyanTeam: {
      type: Array
    },
    magentaTeam: {
      type: Array
    }
  },
  gameEvents: {
    type: Array
  },
  winner: {
    type: String
  },
  bestWorm: {
    type: String
  },
  wormOfMatch: {
    type: String
  },
  mostDamage: {
    type: String
  },
  dolittle: {
    type: String
  }
});

module.exports = mongoose.model('Replay', ReplaySchema);