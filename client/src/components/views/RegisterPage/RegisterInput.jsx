import React from "react";

const RegisterRow = ({
  title,
  type,
  placeholder,
  dispatchName,
  value,
  setRegister,
}) => {
  return (
    <div>
      <label htmlFor={dispatchName + "-input"}>{title}</label>
      <input
        id={dispatchName + "-input"}
        type={type}
        placeholder={placeholder}
        value={value || ""}
        onChange={(event) =>
          setRegister({ name: dispatchName, value: event.target.value })
        }
      />
      <br />
    </div>
  );
};

export default RegisterRow;
