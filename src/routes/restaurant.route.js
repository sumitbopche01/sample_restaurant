/* eslint-disable comma-dangle */
const express = require('express');
const passport = require('passport');

const router = express.Router();
const requestRules = require('../requestRules/restaurant.requestrules');
const { celebrate } = require('celebrate');
const restaurantController = require('../controller/restaurant.controller');

/* GET restaurant  */
router.get('/', restaurantController.getMultiple);

router.get('/:restaurant_id', restaurantController.get);

/* POST create restaurant */
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  celebrate(requestRules.databaseRestaurantData),
  restaurantController.create
);

/* PUT restaurants */
router.put(
  '/:id',
  celebrate(requestRules.databaseRestaurantData),
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
