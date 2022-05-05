import React from "react";
import Input from "../components/Input";
const PasswordRecovery = () => {
  return (
    <div className="w-full flex h-screen justify-center items-center ">
      <form className="w-4/5 flex flex-col items-center">
        <div className="w-full">
          <Input name="password" type="password" label="Новый пароль" />
          <Input name="password" type="password" label="Повторите пароль" />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-2"
          type="submit"
        >
          Потвердить
        </button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
