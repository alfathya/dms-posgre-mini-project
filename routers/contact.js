const ContactRouter = require("express").Router();
const pool = require("../middlewares/db");
const ContactController = require('../controllers/contact');

ContactRouter.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

ContactRouter.post('/', pool, ContactController.createContact);
module.exports = ContactRouter;
