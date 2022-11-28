// load mongoose since we need it to define a model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradeSchema = new Schema({
	date: {
		type: Date,
		default: Date.now(),
		required: true,
	},
	grade: {
		type: String,
		default: '',
	},
	score: {
		type: Number,
		default: 0,
	},
});

const AddressSchema = new Schema({
	building: {
		type: String,
		default: '',
	},
	coord: [Number],
	street: {
		type: String,
		default: '',
	},
	zipcode: {
		type: String,
		default: '',
	},
});

RestaurantsSchema = new Schema({
	address: AddressSchema,
	borough: {
		type: String,
	},
	cuisine: {
		type: String,
	},
	grades: [GradeSchema],
	name: { type: String, default: '' },
	restaurant_id: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('restaurants', RestaurantsSchema);
