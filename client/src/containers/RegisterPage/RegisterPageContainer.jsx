import RegisterPage from "../../components/views/RegisterPage/RegisterPage";
import { connect } from "react-redux";
import { setRegister, postRegister } from "../../modules/main";

const RegisterPageContainer = connect(
  (state) => ({
    state: state.register,
  }),
  (dispatch) => ({
    setRegister: (data) => dispatch(setRegister(data)),
    postRegister: (data) => dispatch(postRegister(data)),
  })
)(RegisterPage);

export default RegisterPageContainer;
