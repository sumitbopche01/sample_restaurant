const {
  Segments,
  Joi
} = require('celebrate');

const rawRestaurantData = {
  [Segments.BODY]: Joi.object()
    .keys({
      _id: Joi.string()
        .optional(),
      name: Joi.string()
        .required(),
      restaurant_id: Joi.string()
        .required(),
      building: Joi.string()
        .required(),
      borough: Joi.string()
        .required(),
      street: Joi.string()
        .required(),
      zipcode: Joi.string()
        .min(3)
        .required(),
      coord: Joi.string()
        .required(),
      cuisine: Joi.string()
        .required(),
      token: Joi.string()
        .required()
    })
};

const databaseRestaurantData = {
  [Segments.BODY]: Joi.object()
    .keys({
      _id: Joi.string()
        .optional(),
      address: {
        building: Joi.string()
          .required(),
        street: Joi.string()
          .required(),
        zipcode: Joi.string()
          .min(3)
          .required(),
        coord: Joi.array()
          .required()
      },
      name: Joi.string()
        .required(),
      restaurant_id: Joi.string()
        .required(),
      borough: Joi.string()
        .required(),
      cuisine: Joi.string()
        .required()
    })
};

const viewRestaurantsFilter = {
  [Segments.QUERY]: {
    page: Joi.number()
      .integer()
      .min(1),
    perPage: Joi.number(),
    borough: Joi.string()
  }
};

module.exports = {
  rawRestaurantData,
  viewRestaurantsFilter,
  databaseRestaurantData
};
