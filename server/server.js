const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/database.js');
const jwt = require('./middleware/jwt');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// Connection to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Database Connected!');
  }, error => {
    console.log('Database Not Connected' + error);
  });

//Routes
const authRoute = require("./routes/auth.route");
const adminRoute = require("./routes/admin.route");
const statusRoute = require("./routes/status.route");

app.use("/auth", authRoute);
app.use("/admins", jwt.checkToken, adminRoute);
app.use("/status", statusRoute);


app.use(express.static(__dirname + "/dist/work-status-app"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/work-status-app/index.html"));
});

// Create port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Connected to port ' + port);
});

//Error handling
app.use(function (err, req, res, next) {
  err.message = err.message || err.error.message;
  if (!err.statusCode) err.statusCode = 500; 
  res.status(err.statusCode).send(err.message); 
});

