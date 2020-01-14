import User from './user';

const checksUser = (req, res) => {
  try {
    const user = User.create(req.body);
    user.then(result => {
      res.status(201).json({ message: 'Created User.', result });
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export default {
  checksUser
};
