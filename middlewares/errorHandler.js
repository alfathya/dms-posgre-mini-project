const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (process.env.APPLICATION_ENV === "development") {
    console.log(err);
  }
  console.log(err.name, err.message);

  if (err.name === "InputValidationError") {
    res.status(400).json({
      message: err.message,
      error: err.errors,
    });
  } else {
    res.status(500).json({
      error: err.message || "internal server error",
      data: err.data,
    });
  }
};

module.exports = errorHandler;
