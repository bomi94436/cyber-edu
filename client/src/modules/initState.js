const initState = {
  loading: {
    USER_LOGIN: false,
    USER_REGISTER: false,
  },
  login: {
    studentId: "",
    password: "",
  },
  register: {
    studentId: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    role: "student", // admin, student, professor
    //image
  },
};

export default initState;
