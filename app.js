/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const jwt = require('jsonwebtoken');

const restaurantRouters = require('./src/routes/restaurant.route');
const restaurantViewsRouters = require('./src/routes/restaurantsView.route');

require('./src/models/db');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.set('views', path.join(__dirname, './src/views'));

const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  // partialsDir: ['src/views/partials/'],
});

app.engine('.hbs', hbs.engine);
app.set('view engine', 'hbs');

app.post('/login', (req, res) => {
  const { username } = req.body;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
  res.json({ accessToken });
});

app.use('/api/restaurants', restaurantRouters);
app.use('/view/restaurants', restaurantViewsRouters);

/* Error handler middleware */
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
