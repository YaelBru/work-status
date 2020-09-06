const express = require('express');
// const app = express();
const authRoute = express.Router();
const AuthController = require('../controllers/auth.controller');

authRoute.route('/login').post(AuthController.login);
authRoute.route('/register').post(AuthController.register);


module.exports = authRoute;
