/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable comma-dangle */
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get(
  '/',
  //TODO: Check if already logged in
  async (req, res) => {
    return res.render('index');
  }
);


module.exports = router;
