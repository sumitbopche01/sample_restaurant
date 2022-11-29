/* eslint-disable comma-dangle */
const express = require('express');
const passport = require('passport');

const router = express.Router();
const restaurantController = require('../controller/restaurant.controller');

/* GET restaurant  */
router.get('/', restaurantController.getMultiple);

router.get('/:restaurant_id', restaurantController.get);

/* POST create restaurant */
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  restaurantController.create
);

/* PUT restaurants */
router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  restaurantController.update
);

/* DELETE restaurants */
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  restaurantController.remove
);

module.exports = router;
