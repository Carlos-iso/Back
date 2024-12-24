'use strict';

const express = require('express');
const router = express.Router();
const banController = require('../controllers/banController.js')

router.get('/list', banController.get);
router.post('/banlist', banController.post);
router.delete('/save', banController.delete);

module.exports = router;