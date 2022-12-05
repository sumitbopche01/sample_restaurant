// /* eslint-disable comma-dangle */
// const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// const router = express.Router();

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

// /* GET restaurant  */
// router.get(
//   '/',
const a = graphqlHTTP({
  // eslint-disable-next-line object-shorthand
  schema: schema,
  rootValue: root,
  graphiql: true,
});

module.exports = a;
