const helper = require('../utils/helper.util');
const config = require('../configs/general.config');
const Restaurants = require('../models/restaurants.model');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await Restaurant.find();
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(restaurantData){
  const result = await Restaurants.create(restaurantData);

  let message = 'Error in creating restaurant';

  if (result.affectedRows) {
    message = 'Restaurant created successfully';
  }

  return {message};
}

async function update(id, restaurantData){
  const result = await Restaurants.update(id, restaurantData);

  let message = 'Error in updating restaurant';

  if (result.affectedRows) {
    message = 'Restaurant updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await Restaurants.findByIdAndDelete(id);

  let message = 'Error in deleting restaurant';

  if (result.affectedRows) {
    message = 'Restaurant deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}