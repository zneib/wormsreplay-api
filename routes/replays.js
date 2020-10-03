const express = require('express');
const { getReplays, getReplay } = require('../controllers/replays')
const router = express.Router();

router.route('/').get(getReplays);
router.route('/:id').get(getReplay);

module.exports = router;
