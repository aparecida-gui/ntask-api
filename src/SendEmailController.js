import User from "./user";
import msgEmail from "./msgEmail";
import { generatePassword, bcryptPassword } from "./help";

const sendEmail = async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email })) {
      const newPassword = generatePassword();

      const newBcrypt = await bcryptPassword(newPassword);

      await User.findOneAndUpdate(
        { email },
        {
          $set: { password: newBcrypt }
        },
        { new: true }
      ).select("+password");

      await msgEmail(email, newPassword);
      res.status(200).json({ password: `your new password ${newPassword}` });
    }
  } catch (error) {
    await res.status(400).json({ message: error });
  }
};

export default { sendEmail };
