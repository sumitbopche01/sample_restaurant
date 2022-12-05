/* eslint-disable comma-dangle */
const express = require('express');
const passport = require('passport');

const router = express.Router();
const restaurantController = require('../controller/restaurant.controller');
const { celebrate, Joi, Segments } = require('celebrate');

/* GET restaurant  */
//router.get('/', restaurantController.getMultiple);

router.get('/:restaurant_id', restaurantController.get);

/* POST create restaurant */
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      restaurant_id: Joi.string().required(),
      building: Joi.string().required(),
      street: Joi.string().required(),
      zipcode: Joi.string().min(3).required(),
      coord: Joi.string().required(),
      cuisine: Joi.string().required()
    })
  }),
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
