import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "../components/Input";
import { setJwt } from "../services/authService";
import { resetPassword } from "../services/passwordService";

const PasswordRecovery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = searchParams.get("email");
    const token = searchParams.get("token");
    const password1 = e.target[0].value;
    const password2 = e.target[1].value;
    setErrorMessage("");

    if (password1.length < 8) {
      setErrorMessage("Пароль должен быть более 8 символов");
      return;
    } else if (password1 !== password2) {
      setErrorMessage("Пароли не совподают");
      return;
    }
    try {
      console.log(token, email, password1);
      const { data } = await resetPassword(email, password1, token);
      const authToken = data.token;
      localStorage.setItem("token", authToken);
      setJwt();
      window.location = "/";
    } catch (err) {
      setErrorMessage("Что-то пошло не так!");
    }
  };

  return (
    <div className="w-full flex flex-col h-screen justify-center items-center ">
      <h1 className="text-center text-2xl">🍏</h1>
      <h1 className="mb-8 font-bold text-center text-2xl">Grab it</h1>

      <form
        onSubmit={handleSubmit}
        className="w-4/5 flex flex-col items-center"
      >
        <div className="w-full">
          <Input
            name="password1"
            error={errorMessage}
            type="password"
            label="Новый пароль"
          />
          <Input name="password2" type="password" label="Повторите пароль" />
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
