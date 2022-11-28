const express = require('express');

const router = express.Router();
const restaurantController = require('../controller/restaurant.controller');

/* GET restaurant  */
router.get('/', restaurantController.showDataView);

router.get('/insert', restaurantController.insertDataView);

module.exports = router;
