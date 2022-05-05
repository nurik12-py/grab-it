import React from "react";
import Input from "../../components/Input";
const EnterEmail = ({ onSubmit, email }) => {
  return (
    <form onSubmit={onSubmit} className="w-4/5 flex flex-col">
      <Input label="Почта" name="email" type="email" value={email}></Input>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-2"
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
};

export default EnterEmail;
