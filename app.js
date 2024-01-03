require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const port = process.env.PORT;

const Router = require("./routers");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(helmet());
app.disable("etag");
app.use(cors());

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(Router);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`dms project mini started in port ${port}`)
);
