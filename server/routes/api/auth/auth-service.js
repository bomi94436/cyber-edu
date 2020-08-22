const db = require("../../../config/dbmysql2");
const query = require("../../../queies/auth-query");

exports.register = async (studentId, password, name, email, phone, role) => {
  try {
    let data = await db.query(query.insertUser, [
      studentId,
      password,
      name,
      email,
      phone,
      role,
    ]);
    return data[0];
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
