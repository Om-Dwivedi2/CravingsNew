export const RegisterUser = (req, res, next) => {
  console.log("hello from middleware");
  res.status(200).json({message: "Hello sir"})
};
