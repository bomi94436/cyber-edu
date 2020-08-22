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
    role: "1",
    //image
  },
};

export default initState;
