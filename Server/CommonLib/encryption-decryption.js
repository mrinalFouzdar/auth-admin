const bcrypt = require("bcrypt");

function encryptPassword(plainPassword) {
  const encrptPassword = bcrypt.hashSync(plainPassword, 10);
  return encrptPassword;
}

function decryptPassword(plainPassword, encryptPassword) {
  const encrptPassword = bcrypt.compareSync(plainPassword, encryptPassword);

  if (encrptPassword) {
    return true;
  }
  return false;
  //   const encrptPassword = bcrypt.compareSync(plainPassword, encryptPassword);
  //   console.log(encrptPassword);
  //   return encrptPassword;
}

module.exports = {
  encryptPassword,
  decryptPassword,
};
