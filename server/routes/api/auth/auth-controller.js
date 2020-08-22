/*
    POST /api/auth/register
    {
        username,
        password
    }
*/

const authService = require("../auth/auth-service");

exports.register = async (req, res) => {
  const { studentId, password, name, email, phone, role } = req.body;
  try {
    let rows = await authService.register(
      studentId,
      password,
      name,
      email,
      phone,
      role
    );
    return res
      .status(200)
      .json({
        message: "회원가입이 성공적으로 완료되었습니다!",
        payload: rows[0],
      });
  } catch (error) {
    return res.status(500).json(error);
  }
};
