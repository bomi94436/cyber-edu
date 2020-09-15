const getStudentId = () => {
  let studentId = "";
  for (let i of [...Array(9).keys()]) {
    studentId += String(Math.floor(Math.random() * 10));
  }
  return studentId;
};

exports.register = [
  { title: "학번(직번)", name: "studentId", value: getStudentId() },
  { title: "비밀번호", name: "password", value: "bomibomi9" },
  { title: "이름", name: "name", value: "정보미" },
  { title: "이메일", name: "email", value: "boo0729611@gmail.com" },
  { title: "휴대폰 번호", name: "phone", value: "010-1234-5678" },
  { title: "학생", name: "role", value: "student" },
];

exports.registerList = [
  getStudentId(),
  "bomibomi",
  "정보미",
  "boo0729611@gmail.com",
  "010-1234-5678",
  "professor",
];
