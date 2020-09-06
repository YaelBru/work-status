const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Status = new Schema(
  {
    name: {
      type: String,
    },
  },
  {
    collection: "Status",
  }
);

module.exports = mongoose.model("Status", Status);
