const express = require("express");
// const app = express();
const statusRoute = express.Router();
const StatusController = require("../controllers/status.controller");

statusRoute.route("/").get(StatusController.getAll);

module.exports = statusRoute;
