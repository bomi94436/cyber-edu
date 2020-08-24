import React from "react";

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

export default RegisterRow;
