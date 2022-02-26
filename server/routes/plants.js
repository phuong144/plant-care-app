const axios = require('axios')
var fs = require('fs');
var express = require('express');
var router = express.Router();
require("dotenv").config();

const plants = require('../src/plants');

// POST retrieve plant data given plant image
router.post('/', async function (req, res, next) {
  const plantData = await plants.retrievePlantData(req.body);
  // console.log("Plant data: " + plantData);
  res.json({
    "success": true,
    "plantData": plantData
  });
});

module.exports = router;