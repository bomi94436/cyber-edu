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
    studentId: undefined,
    password: "",
    name: "",
    email: "",
    phone: undefined,
    role: "student", // admin, student, professor
    //image
  },
};

export default initState;
