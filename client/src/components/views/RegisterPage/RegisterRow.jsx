import React from "react";
import { connect } from "react-redux";
import { setRegister } from "../../../modules/main";

const RegisterRow = ({
  title,
  type,
  placeholder,
  dispatchName,
  setRegister,
}) => {
  return (
    <div>
      <span>{title}</span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(event) =>
          setRegister({ name: dispatchName, value: event.target.value })
        }
      />
      <br />
    </div>
  );
};

export default connect(
  (state) => ({}),
  (dispatch) => ({
    setRegister: (data) => dispatch(setRegister(data)),
  })
)(RegisterRow);
