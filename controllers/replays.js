const Replay = require('../models/Replay');

// GET api/replays
// Public
exports.getReplays = async (req, res) => {
  try {
    const replays = await Replay.find();
    if (!replays) {
      res.status(500).send('Server Error');
    }
    res.status(200).json({ success: true, data: replays });
  } catch (error) {
    console.error(error.message);
  }
};

exports.getReplay = async (req, res) => {
  try {
    const replay = await Replay.findById(req.params.id);
    if (!replay) {
      res.status(500).send('Server Error');
    }
    res.status(200).json({ success: true, data: replay });
  } catch (error) {
    console.error(error.message);
  }
}