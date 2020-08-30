const initState = {
  loading: {
    USER_LOGIN: false,
    POST_REGISTER: false,
  },
  login: {
    studentId: undefined,
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
