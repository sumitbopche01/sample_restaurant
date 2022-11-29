const usersService = require('../services/users.service');

async function signUp(req, res, next) {
  try {
    res.json(await usersService.signUp(req.body));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error while signup', err.message);
    next(err);
  }
}

async function login(req, res, next) {
  try {
    res.json(await usersService.login(req.body));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error while login', err.message);
    next(err);
  }
}

module.exports = {
  signUp,
  login,
};
