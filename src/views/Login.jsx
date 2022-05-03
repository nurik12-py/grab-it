import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

import { login, setJwt } from "../services/authService";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(loginData);
    setErrors(errors);
    if (Object.keys(errors).length != 0) return;

    setLoading(true);
    try {
      const res = await login(loginData.email, loginData.password);
      const data = res.data;
      const token = data.token;
      localStorage.setItem("token", token);
      setJwt();
      window.location = "/";
    } catch (ex) {
      setErrors({ email: ex.response.data.message });
    }
    setLoading(false);
  };

  const handleInput = (e) => {
    const copy = { ...loginData };
    copy[e.target.name] = e.target.value;
    setLoginData(copy);
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Введите почту";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Введите корректный адрес";
    }
    if (!values.password) {
      errors.password = "Введите пороль";
    }
    return errors;
  };

  return (
    <div className="w-full h-screen">
      <div className="flex items-center h-full">
        <main
          className="form-signin m-auto w-full"
          style={{ maxWidth: "300px" }}
        >
          <form onSubmit={(e) => onSubmit(e)}>
            <h1 className="text-center text-2xl">🍏</h1>
            <h1 className="mb-8 font-bold text-center text-2xl">Grab it</h1>

            <Input
              onChange={handleInput}
              name="email"
              type="email"
              value={loginData.email}
              label="Почта"
              error={errors.email}
            />

            <div className="mt-3">
              <Input
                onChange={handleInput}
                name="password"
                value={loginData.password}
                label="Пароль"
                type="password"
                error={errors.password}
              />
            </div>
            <div className=" mt-5 login w-full flex justify-center mb-8">
              <button
                className=" flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="icon fa-spin fa-2x w-6 h-6"
                  />
                ) : (
                  <span>Войти</span>
                )}
              </button>
            </div>
            <span className=" text-slate-400 flex justify-center">
              У вас еще нет аккаунта?
            </span>
            <Link to="/registration">
              <p className="text-blue-600 text-center">Зарегистрироваться</p>
            </Link>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
