const helper = require('../utils/helper.util');
const config = require('../configs/general.config');
const Restaurants = require('../models/restaurants.model');

/**
 *
 * @param {String} restaurantId
 * @returns single restaurant document
 */
async function getSingle(restaurantId) {
    const rows = await Restaurants.find({_id: restaurantId});
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
        .limit(config.listPerPage)
        .lean();
    const data = helper.emptyOrRows(rows);
    const totalPages = await Restaurants.count() / config.listPerPage;
    const meta = {
        page,
        limit: totalPages
    };

    return {
        data: data,
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

    if (result) {
        message = 'Restaurant created successfully';
    }

    return {message};
}

/**
 *
 * @param {String} id
 * @param {Object} restaurantData
 * @returns
 */
async function update(id, restaurantData) {
    const result = await Restaurants.findByIdAndUpdate(id, restaurantData);

    let message = 'Error in updating restaurant';

    if (result) {
        message = 'Restaurant updated successfully';
    }

    return {message};
}

/**
 *
 * @param {String} id
 * @returns
 */
async function remove(id) {
    const result = await Restaurants.findByIdAndDelete(id);

    let message = 'Error in deleting restaurant';

    if (result) {
        message = 'Restaurant deleted successfully';
    }

    return {message};
}

module.exports = {
    getSingle,
    getMultiple,
    create,
    update,
    remove,
};
