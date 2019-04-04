const express = require('express');
const router = express.Router();
const { getTest } = require('../../controllers/chatRoomController')

router.get('/', getTest);

module.exports = router;