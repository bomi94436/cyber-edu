const db = require("../../../config/dbmysql2");
const query = require("./auth-query");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.register = async (studentId, password, name, email, phone, role) => {
  try {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) throw Error(err);
      let rows = db.query(query.insertUser, [
        studentId,
        hash,
        name,
        email,
        phone,
        role,
      ]);
      return rows;
    });
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
