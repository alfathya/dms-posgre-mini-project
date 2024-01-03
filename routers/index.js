const Router = require("express").Router();
// const pool = require("./db");

const ContactRouter = require("./contact");

Router.use("/contacts", ContactRouter);

module.exports = Router;
