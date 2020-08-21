/*
    POST /api/auth/register
    {
        username,
        password
    }
*/

const db = require("../../../config/dbmysql2").promise();

exports.register = (req, res) => {
  const { studentId, password } = req.body;
  console.log(studentId, password);
  db.query(
    `INSERT INTO user_test(student_id, password) VALUES (${studentId}, ${password});`,
    (error, results) => {
      if (error) throw error;
      return res.status(200).end();
    }
  );
};
