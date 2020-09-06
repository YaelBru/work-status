const express = require('express');
const app = express();
const adminRoute = express.Router();
const AdminController = require('../controllers/admin.controller');

adminRoute.route("/").get(AdminController.getAll);
adminRoute.route("/admin").get(AdminController.getAdmin);
adminRoute.route("/admin-update").post(AdminController.update);

module.exports = adminRoute;
