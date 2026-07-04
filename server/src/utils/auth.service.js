import jwt from "jsonwebtoken";

export async function genToken(res, existingUser) {
  try {
    const payload = { id: existingUser._id };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("UserToken", token);
    console.log("token Succesfully Created: ", token);
  } catch (error) {
    throw next(error);
  }
};
