const { hash,compare } = require("bcryptjs")

export const bycrypt = async (password:string) => {
  const passwordHash = await hash(password,8)
  return passwordHash;
};

export const passwordCompare = async (password:string,passwordHash:string) => {
  const isCorrect = await compare(password,passwordHash);
  if(!isCorrect) throw Error(`The password is incorrect`);
  return isCorrect
};