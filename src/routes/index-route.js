'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=> {
    res.status(200).send({
        title: "Coeeeeeeeé🐊",
        version: "1.0.0",
        environment: "Development"
    });
});

module.exports = router;