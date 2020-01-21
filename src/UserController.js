import User from './user';
import bcrypt from 'bcrypt';
import { bcryptPassword, token } from './help';

const checksUser = async (req, res) => {
  req.body.password = await bcryptPassword(req.body.password);

  try {
    const user = User.create(req.body);
    const tokenGeneral = await token({ id: user.id });
    console.log('tokenGeneral: ', tokenGeneral);
    user
      .then(userData => {
        res.status(201).json({ message: 'Created User.', userData, tokenGeneral });
      })
      .catch(() => res.status(403).json({ error: 'user exist' }));
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

const authenticationUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');

  if (await user) {
    if (await bcrypt.compare(password, user.password)) {
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
