import User from "./user";
import msgEmail from "./msgEmail";

const sendEmail = async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email })) {
      await msgEmail(email);
      res.status(200).json({ message: "email send" });
    }
  } catch (error) {
    await res.status(400).json({ message: error });
  }
};

export default { sendEmail };
