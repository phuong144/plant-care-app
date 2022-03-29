var express = require('express');
var router = express.Router();
require("dotenv").config();

const plants = require('../src/plants');
const plantScrapper = require('../src/scrape/plantScrapper');

// POST retrieve plant data given plant image
router.post('/', async function (req, res, next) {
  const plantData = await plants.retrievePlantData(req.body);
  const plantName = plantData.suggestions[0]['plant_name'];
  const url = await plantScrapper(plantName);
  res.json({
    "success": true,
    "plantData": plantData,
    "url": url
  });
});

module.exports = router;