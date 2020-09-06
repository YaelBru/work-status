const Status = require("../models/Status");

class StatusController {
  static async getAll(req, res, next) {
    try {
      return Status.find((error, data) => error ? next(error) : res.status(200).json(data));
    } catch (error) {
      next(error);
    }
  }
}
module.exports = StatusController;
