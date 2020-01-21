import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

export const bcryptPassword = async password => {
  return await bcrypt.hash(password, 10);
};

export const bcryptCompare = async (dataRequest, data) => {
  return await bcrypt.compare(dataRequest, data);
};

export const token = async ({ data }) => {
  return await jsonwebtoken.sign({ data }, 'sdsdsdsdsds', { expiresIn: 86400 });
};
