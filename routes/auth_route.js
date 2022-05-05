const express = require("express");
const User = require("../models/User");
const BadRequestError = require('../http-errors').BadRequestError;
const {UnauthenticatedError } = require("../errors");
const { register, login } = require("../controllers/auth");

const router = express.Router();

router.post('/register',register)
router.post("/login", login);


module.exports = router
 