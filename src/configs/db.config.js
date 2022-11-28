require('dotenv').config();

module.exports = {
	url: 'mongodb://localhost:27017/as4',
	atlas_url: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.2maodvc.mongodb.net/sample_restaurants?retryWrites=true&w=majority`,
};
