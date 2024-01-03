const pool = require("../helpers/db");

const addPoolToRequest = (req, res, next) => {
  req.pool = pool;
  next();
};

module.exports = addPoolToRequest;
