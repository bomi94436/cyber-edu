import React from "react";
import { inputClassNameByValid } from "../../../utils/checkValidation";

const RegisterRow = ({
  title,
  type,
  valid,
  value,
  placeholder,
  dispatchName,
  setRegister,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={dispatchName + "-input"}>{title}</label>
      <input
        id={dispatchName + "-input"}
        type={type}
        className={`form-control ${inputClassNameByValid(valid)}`}
        placeholder={placeholder}
        value={value}
        onChange={(event) =>
          setRegister({ name: dispatchName, value: event.target.value })
        }
      />
      <br />
    </div>
  );
};

export default RegisterRow;
