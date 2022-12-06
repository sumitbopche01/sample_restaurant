/* eslint-disable comma-dangle */
const express = require('express');
const { celebrate } = require('celebrate');
const axios = require('axios');

const router = express.Router();
const requestRules = require('../requestRules/restaurant.requestrules');
const restaurantController = require('../controller/restaurant.controller');

/* GET restaurant  */
router.get(
  '/',
  celebrate(requestRules.viewRestaurantsFilter),
  restaurantController.showDataView
);

router.post('/add',
  celebrate(requestRules.rawRestaurantData),
  function (req, res, next) {
    const restaurant = {
      address: {
        building: req.body.building,
        coord: req.body.coord.split(','),
        street: req.body.street,
        zipcode: req.body.zipcode,
      },
      borough: req.body.borough,
      cuisine: req.body.cuisine,
      name: req.body.name,
      restaurant_id: req.body.name
    };

    axios.post(req.headers.origin + '/api/restaurants', restaurant,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ` + req.body.token
        }
      }
    )
      .then((response) => {
        res.redirect(req.headers.origin + '/view/restaurants?javascript:alert("Successfully Added New Data");');
      });
  }
);

router.post('/edit',
  function (req, res, next) {
  console.log(req.body);
    const restaurant = {
      address: {
        building: req.body.building,
        coord: req.body.coord.split(','),
        street: req.body.street,
        zipcode: req.body.zipcode,
      },
      borough: req.body.borough,
      cuisine: req.body.cuisine,
      name: req.body.name,
      restaurant_id: req.body.name,
      _id: req.body._id
    };

    axios.put(req.headers.origin + '/api/restaurants/' + restaurant._id, restaurant,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ` + req.body.token
        }
      }
    )
      .then((response) => {
        res.sendFile('../public/success.html', { root: __dirname });
      })
      .catch((error) => {
        res.sendFile('../public/error.html', { root: __dirname });
      });
  }
);

router.get('/insert', restaurantController.insertDataView);

module.exports = router;
