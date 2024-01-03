const ContactRouter = require("express").Router();

const pool = require('../helpers/db');

ContactRouter.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = ContactRouter;
