const initState = {
  loading: {
    USER_LOGIN: false,
    POST_REGISTER: false,
  },
  login: {
    studentId: "",
    password: "",
  },
  register: {
    value: {
      role: "", // admin, student, professor
      studentId: "",
      password: "",
      re_password: "",
      name: "",
      email: "",
      phone: "",
      //image
    },
    valid: {
      // validation check
      role: null,
      studentId: null,
      password: null,
      re_password: null,
      name: null,
      email: null,
      phone: null,
    },
  },
};

export default initState;
