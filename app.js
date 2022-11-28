/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const restaurantRouters = require('./src/routes/restaurant.route');
const restaurantViewsRouters = require('./src/routes/restaurantsView.route');

require('./src/models/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

const hbs = exphbs.create({
  extname: '.hbs',
  partialsDir: ['src/views/partials/'],
});

app.engine('.hbs', hbs.engine);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.use('/restaurants', restaurantRouters);
app.use('/view/restaurants', restaurantViewsRouters);

/* Error handler middleware */
app.use((err, req, res) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
