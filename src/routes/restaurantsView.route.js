const express = require('express');

const router = express.Router();
const restaurantController = require('../controller/restaurant.controller');

/* GET restaurant  */
router.get('/', restaurantController.showData);

router.get('/insert', restaurantController.insertData);

module.exports = router;
