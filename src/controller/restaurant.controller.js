const restaurantService = require('../services/restaurants.service');

async function get(req, res, next) {
  try {
      res.json(await restaurantService.getMultiple(req.query.page));
  } catch (err) {
      console.error(`Error while getting restaurants`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await restaurantService.create(req.body));
  } catch (err) {
    console.error(`Error while creating restaurant`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await restaurantService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating restaurant`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await restaurantService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting restaurant`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};