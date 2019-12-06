const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// Load models
require('../models/Log');
const Log = mongoose.model('logs');

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200
}

router.post('/', cors(corsOptions), (req, res) => {
  let log = {}
  log.type = req.body.type;
  log.log = req.body.log;

  new Log(log)
    .save()
    .then(_ => {
      res.status(200).send();
    })
    .catch(err => {
      console.error(err);
      res.status(500).send();
    })
});

module.exports = router;
