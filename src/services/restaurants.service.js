const helper = require('../utils/helper.util');
const config = require('../configs/general.config');
const Restaurants = require('../models/restaurants.model');

/**
 *
 * @param {String} restaurantId
 * @returns single restaurant document
 */
async function getSingle(restaurantId) {
  const rows = await Restaurants.find({ restaurant_id: restaurantId });
  const data = helper.emptyOrRows(rows);
  return {
    data,
  };
}

/**
 *
 * @param {Number} page page number
 * @returns returns list of restaurant documents
 */
async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await Restaurants.find({})
    .skip(offset)
    .limit(config.listPerPage);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

/**
 *
 * @param {Object} restaurantData
 * @returns
 */
async function create(restaurantData) {
  const result = await Restaurants.create(restaurantData);

  let message = 'Error in creating restaurant';

  if (result.affectedRows) {
    message = 'Restaurant created successfully';
  }

  return { message };
}

/**
 *
 * @param {String} id
 * @param {Object} restaurantData
 * @returns
 */
async function update(id, restaurantData) {
  const result = await Restaurants.update(id, restaurantData);

  let message = 'Error in updating restaurant';

  if (result.affectedRows) {
    message = 'Restaurant updated successfully';
  }

  return { message };
}

/**
 *
 * @param {String} id
 * @returns
 */
async function remove(id) {
  const result = await Restaurants.findByIdAndDelete(id);

  let message = 'Error in deleting restaurant';

  if (result.affectedRows) {
    message = 'Restaurant deleted successfully';
  }

  return { message };
}

module.exports = {
  getSingle,
  getMultiple,
  create,
  update,
  remove,
};
