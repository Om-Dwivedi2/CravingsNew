import contact from "../model/contact.model.js";

export const ContactUs = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log("Contact Us API called");
    const { fullName, email, phone, subject, message } = req.body;

    if (!fullName || !email || !phone || !subject || !message) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);

    }

    const contactUser = await contact.create({
      fullName,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({ message: "New contact User created" , data: contactUser});

  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
