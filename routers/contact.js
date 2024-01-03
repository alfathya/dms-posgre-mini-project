const ContactRouter = require("express").Router();
const pool = require("../middlewares/db");
const ContactController = require('../controllers/contact');

ContactRouter.get('/', pool, ContactController.getAll);
ContactRouter.post('/', pool, ContactController.createContact);
module.exports = ContactRouter;
