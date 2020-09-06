const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Admin = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    collection: "Admins",
  }
);

module.exports = mongoose.model("Admin", Admin);
