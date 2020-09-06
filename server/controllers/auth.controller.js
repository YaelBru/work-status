const Admin = require("../models/Admin");
// const jwtMiddleware = require("../middleware/jwt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

class AuthController {
  static async login(req, res, next) {
    try {
      let email = req.body.email.trim();
      let password = req.body.password.trim();
      let result = await Admin.findOne({ email: email });

      if (!result) {
        res.status(401).json({
          message: "Email or password incorrect"
        });
      } else {
        if (result.password === password) {
          let token = jwt.sign({ email: result.email }, config.secret, {
            expiresIn: "24h",
          });
          res.status(200).json({
            success: true,
            token: token,
            id: result._id,
          });
        } else {
          res.status(409).json({
            msg: "Email or password incorrect"
          });
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      let name = req.body.name;
      let email = req.body.email;
      let password = req.body.password;

      let result = await Admin.findOne({
        email: email,
      });

      if (!result) {
        Admin.create(
          {
            name: name,
            email: email,
            password: password,
            status: null,
          },
          (error, data) => {
            if (error) {
              next(error);
            } else {
              let token = jwt.sign({ email: data.email }, config.secret, {
                expiresIn: "24h",
              });
              res.json({
                success: true,
                token: token,
                admin: {
                  id: data._id,
                  name: data.name,
                  email: data.email,
                  status: data.status,
                },
              });
            }
          }
        );
      } else {
        res.status(409).json({
          message: "User already exists"
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
