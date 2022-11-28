/* eslint-disable no-console */
// Bring Mongoose into the app
const mongoose = require('mongoose');
const dbConfig = require('../configs/db.config');

const dbURI = dbConfig.atlas_url;

// Create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
  console.log('Connected MongoDB');
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.log(`Error while connecting to MongoDB :${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log(
      'Mongoose default connection disconnected through app termination',
    );
    process.exit(0);
  });
});
