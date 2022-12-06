/* eslint-disable comma-dangle */
const express = require('express');
const passport = require('passport');
const { celebrate } = require('celebrate');

const router = express.Router();
const requestRules = require('../requestRules/restaurant.requestrules');
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
