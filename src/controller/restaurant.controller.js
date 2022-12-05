const restaurantService = require('../services/restaurants.service');

async function get(req, res, next) {
  try {
    res.json(await restaurantService.getSingle(req.params.restaurant_id));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error while getting restaurants', err.message);
    next(err);
  }
}

async function getMultiple(req, res, next) {
  try {
    res.json(await restaurantService.getMultiple(req.query));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error while getting multiple restaurants', err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await restaurantService.create(req.body));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error while creating restaurant', err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await restaurantService.update(req.params.id, req.body));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error while updating restaurant', err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await restaurantService.remove(req.params.id));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error while deleting restaurant', err.message);
    next(err);
  }
}

async function showDataView(req, res, next) {
  try {
    // call and get data from service
    res.render('showRestaurants', await restaurantService.getMultiple(req.query));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error while showing restaurants using pages', err.message);
    next(err);
  }
}

async function insertDataView(req, res, next) {
  try {
    res.render('insertRestaurantForm');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error while inserting a new restaurant', err.message);
    next(err);
  }
}

module.exports = {
  get,
  getMultiple,
  create,
  update,
  remove,
  showDataView,
  insertDataView,
};
