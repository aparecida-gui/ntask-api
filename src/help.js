import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const bcryptPassword = async password => {
  return await bcrypt.hash(password, 10);
};

export const token = async ({ data }) => {
  return await jwt.sign({ data }, 'sdsdsdsdsds', { expiresIn: 86400 });
};
