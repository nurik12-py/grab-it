import { ChangeEvent, FC } from "react";

interface InputProps {
  label: string;
  name: string;
  value?: string;
  onChange?: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined;
  placeholder?: string;
  type?: string;
  error?: string;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
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
        disabled={disabled}
        {...rest}
      />
      <p className="text-red-600 text-[14px] mb-2 ">{error}</p>
    </>
  );
};

export default Input;
