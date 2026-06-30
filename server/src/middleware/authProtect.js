const AuthProtect = (req, res, next) => {
  try {
    // Middleware Logic

    next();
  } catch (error) {
    const error = new Error("Error from the middleware");
    error.statusCode = 400;
    next(error);
  }
};
