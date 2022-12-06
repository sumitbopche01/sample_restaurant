/* eslint-disable comma-dangle */
const express = require('express');

const router = express.Router();
const {
  celebrate,
  Segments,
  Joi
} = require('celebrate');
const restaurantController = require('../controller/restaurant.controller');

/* GET restaurant  */
router.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      page: Joi.number().integer().min(1),
      perPage: Joi.number(),
      borough: Joi.string()
    }
  }),
  restaurantController.showDataView
);

router.get('/insert', restaurantController.insertDataView);

module.exports = router;
