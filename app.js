/* eslint-disable comma-dangle */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
// const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

require('dotenv').config();

const restaurantRouters = require('./src/routes/restaurant.route');
const restaurantViewsRouters = require('./src/routes/restaurantsView.route');
const userRouters = require('./src/routes/user.route');
const sessionRouters = require('./src/routes/session.route');
// const restaurantGraphQlRouters = require('./src/routes/restaurantsGraphQL.route');
const a = require('./src/routes/restaurantsGraphQL.route');

require('./src/models/db');
require('./src/auth/auth');

const app = express();
const port = process.env.PORT || 8000;

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  // eslint-disable-next-line arrow-body-style
  hello: () => {
    return 'Hello world!';
  },
};

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    // eslint-disable-next-line comma-dangle
  })
);
app.use(express.static(path.join(__dirname, 'src/public')));

app.set('views', path.join(__dirname, './src/views'));

const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  // partialsDir: ['src/views/partials/'],
  helpers: {
    // eslint-disable-next-line eqeqeq
    isEqual: (number1, number2) => number1 == number2,
    decrement: (page) => (page <= 1 ? 1 : Number(page) - 1),
    increment: (page, limit) => (page >= limit ? limit : Number(page) + 1),
  },
});

app.engine('.hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use('/', sessionRouters);
app.use('/api/restaurants', restaurantRouters);
app.use('/api/user', userRouters);
app.use('/view/restaurants', restaurantViewsRouters);
app.use(
  '/graphql',
  a
  // restaurantGraphQlRouters
  // graphqlHTTP({
  //   // eslint-disable-next-line object-shorthand
  //   schema: schema,
  //   rootValue: root,
  //   graphiql: true,
  // })
);
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
