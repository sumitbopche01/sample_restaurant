// load mongoose since we need it to define a model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeometrySchema = new Schema({
	coordinates: [
		{
			type: Array,
			required: false,
		},
	],
	type: {
		type: String,
		default: '',
		required: false,
	},
});

NeighborhoodsSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	geometry: GeometrySchema,
});

module.exports = mongoose.model('neighborhoods', NeighborhoodsSchema);
