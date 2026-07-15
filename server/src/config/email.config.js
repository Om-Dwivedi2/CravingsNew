import nodemailer from "nodemailer";

const sendEmail = async (to, subject, message) => {
  try {
    console.log("Started Sending Email");

    console.log(process.env.GMAIL_USERNAME);

    console.log(process.env.GMAIL_PASSCODE);

    console.log(1);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSCODE,
      },
    });

    console.log(2);

    const mailOption = {
      from: process.env.GMAIL_USERNAME,
      to,
      subject,
      html: message,
    };

    console.log(3);

    const res = await transporter.sendMail(mailOption);
    console.log(res);
    console.log(4);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default sendEmail;
