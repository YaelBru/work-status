const Admin = require("../models/Admin");

class AdminController {
  static async getAll(req, res, next) {
    try {
      return Admin.find((error, data) =>
        error ? next(error) : res.status(200).json(data)
      );
    } catch (error) {
      next(error);
    }
  }

  static async getAdmin(req, res, next) {
    try {
      let userId = req.query.userId;
      let result = await Admin.findOne({ _id: userId });

      if (!result) {
        res.status(401).json({
          success: false,
          message: "Admin not found",
        });
      } else {
        res.status(200).json({
          success: true,
          admin: {
            id: result._id,
            name: result.fullName,
            email: result.email,
            status: result.status,
          },
        });
      }
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      let newStatus = req.body.newStatus;
      let id = req.body.id;

      Admin.findOneAndUpdate(
        {_id: id},
        { status: newStatus },
        { new: true },
        (err, updatedDoc) => {
          if (err) {
            res.status(401).json({
              success: false,
              message: "Admin not found",
            });
          } else {
            res.status(200).json({
              success: true,
              admin: updatedDoc,
            });
          }
        }
      );
    } catch (error) {
      next(error);
    }
  }
}
module.exports = AdminController;
