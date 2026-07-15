import jwt from "jsonwebtoken";

export async function genToken(res, existingUser) {
  try {
    const payload = { id: existingUser._id };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("UserToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
      path: "/",
    });
    console.log("token Succesfully Created: ", token);
  } catch (error) {
    throw error;
  }
}

export const genOTPToken = async (user, res) => {
  try {
    const payload = { id: user._id };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    res.cookie("emailToken", token, {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    console.log(token);
  } catch (error) {
    throw error;
  }
};
