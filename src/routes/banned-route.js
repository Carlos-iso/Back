'use strict';

const express = require('express');
const router = express.Router();
const banController = require('../controllers/banController.js')

router.get('/list', banController.get);
router.post('/banish', banController.post);
router.delete('/unban', banController.delete);

module.exports = router;