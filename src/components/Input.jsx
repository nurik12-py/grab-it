import React from "react";
const Input = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  error,
  ...rest
}) => {
  return (
    <>
      <label className="font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        className={`mt-1
        block
        w-full
        rounded-md
        ${error ? "border-red-300" : "border-gray-300"} 
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
        {...rest}
      />
      <p className="text-red-600 text-[14px] mb-2 ">{error}</p>
    </>
  );
};

export default Input;
