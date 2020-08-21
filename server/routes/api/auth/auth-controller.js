/*
    POST /api/auth/register
    {
        username,
        password
    }
*/

const db = require("../../../config/dbmysql2").promise();
const query = require("../../../queies/auth-query");

exports.register = (req, res) => {
  const { studentId, password, name, email, phone, role } = req.body;
  db.query(
    query.insertUser,
    [studentId, password, name, email, phone, role],
    (error, results) => {
      if (error) throw error;
      console.log("register");
      return res
        .status(200)
        .json({ message: "회원가입이 성공적으로 완료되었습니다!" });
    }
  );
};
