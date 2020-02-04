import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const bcryptPassword = async password => {
  return await bcrypt.hash(password, 10);
};

export const bcryptCompare = async (dataRequest, data) => {
  return await bcrypt.compare(dataRequest, data);
};

export const token = async ({ data }) => {
  return await jsonwebtoken.sign({ data }, "sdsdsdsdsds", { expiresIn: 86400 });
};

export const generatePassword = () => {
  const generante = Math.random()
    .toString(36)
    .split(-6);
  return generante.toString();
};
