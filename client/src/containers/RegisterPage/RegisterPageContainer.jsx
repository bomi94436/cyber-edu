import RegisterPage from "../../components/views/RegisterPage/RegisterPage";
import { connect } from "react-redux";
import { setRegister, userRegister } from "../../modules/main";

const RegisterPageContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    userRegister: () => dispatch(userRegister()),
    setRegister: (data) => dispatch(setRegister(data)),
  })
)(RegisterPage);

export default RegisterPageContainer;
