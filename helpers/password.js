const bcrypt = require ("bcryptjs");

function hashPassword(actualPassword) {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(actualPassword, salt)
  return hash
}

function comparePassword(actualPassword, hashedPassword) {
  return bcrypt.compareSync(actualPassword, hashedPassword);
}

module.exports = { hashPassword , comparePassword }