import User from './user';
import { bcryptPassword, bcryptCompare, token } from './help';

const checksUser = async (req, res) => {
  const { email } = req.body;
  req.body.password = await bcryptPassword(req.body.password);

  try {
    if (!(await User.findOne({ email }))) {
      const user = await User.create(req.body);
      const tokenGeneral = await token({ id: user.id });
      await res
        .status(201)
        .json({ message: 'Created User.', user, tokenGeneral });
    } else {
      await res.status(400).json({ errorMessage: 'user exist.' });
    }
  } catch (error) {
    await res.status(500).json({ errorMessage: error });
  }
};

const authenticationUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if (await user) {
    if (await bcryptCompare(password, user.password)) {
      const tokenGeneral = await token({ id: user.id });
      return res
        .status(200)
        .json({ message: 'Welcome app NTask', user: user.name, tokenGeneral });
    } else {
      return res.status(400).json({
        errorMessage: 'password not register.'
      });
    }
  } else {
    return res.status(400).json({ errorMessage: 'email not register.' });
  }
};

export default {
  checksUser,
  authenticationUser
};
