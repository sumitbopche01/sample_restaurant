const express = require('express');

const router = express.Router();
const restaurantController = require('../controller/restaurant.controller');

/* GET restaurant  */
router.get('/', restaurantController.get);

router.get('/:restaurant_id', restaurantController.get);

/* POST create restaurant */
router.post('/', restaurantController.create);

/* PUT restaurants */
router.put('/:id', restaurantController.update);

/* DELETE restaurants */
router.delete('/:id', restaurantController.remove);

module.exports = router;
