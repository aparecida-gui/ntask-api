import { emailSendGrid } from './service/emailServices';
import User from './user';

const sendEmail = async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email })) {
      console.log('email: ', email);

      const sendTo = 'suelen.ads.guimaraes@ggmail.com';
      const myEmail = 'suelen.ads.guimaraes@outlook.com';

      const sendEmail = await emailSendGrid(sendTo, myEmail);

      if (sendEmail) {
        return await res.status(200).json({
          message: 'email enviado com sucesso.'
        });
      } else {
        return res.status(403).json({
          messageErro: 'não foi possível enviar o e-mail.'
        });
      }
    }
  } catch (errors) {
    return res.status(401).json({ errors });
  }
};

export default sendEmail;
