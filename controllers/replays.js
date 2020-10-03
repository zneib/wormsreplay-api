const Replay = require('../models/Replay');

// GET api/replays
// Public
exports.getReplays = async (req, res) => {
  const replays = await Replay.find();
  if (!replays) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
  res.status(200).json({ success: true, data: replays });
};

exports.getReplay = async (req, res) => {
  const replay = await Replay.findById(req.params.id);
  if (!replay) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
  res.status(200).json({ success: true, data: replay });
}