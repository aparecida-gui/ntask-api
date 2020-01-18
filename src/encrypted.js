import bcrypt from 'bcrypt';

const encrypted = async password => {
  const result = await bcrypt.hash(password, 10);
  return result;
};

export default encrypted;
