import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setJwt } from "../services/authService";
import { register } from "../services/userService";
import Input from "../components/Input";
const Registration = () => {
  const [data, setData] = useState({
    name: "",
    phone_number: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const copy = { ...data };
    copy[e.target.name] = e.target.value;
    setData(copy);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(data));
    const errors = validate(data);
    if (Object.keys(errors).length === 0) {
      try {
        const body = {
          name: data.name,
          phone_number: data.phone_number,
          email: data.email,
          password: data.password,
        };

        const response = await register(body);
        const token = response.data.token;
        localStorage.setItem("token", token);
        setJwt();
        window.location = "/";
      } catch (ex) {
        setErrors({ name: "Пользователь уже зарегистрирован" });
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Имя не может быть пустым";
    }
    if (!values.phone_number) {
      errors.phone_number = "Номер не может быть пустым";
    } else if (values.phone_number.length !== 11) {
      errors.phone_number = "Неправильный номер телефона";
    }
    if (!values.email) {
      errors.email = "Почта не может быть пустым";
    } else if (!regex.test(values.email)) {
      errors.email = "Введите корректный адрес";
    }
    if (!values.password) {
      errors.password = "Пароль не может быть пустым";
    } else if (values.password.length < 8) {
      errors.password = "Пароль должен быть более 8 символов";
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
              label="Имя"
              name="name"
              value={data.name}
              onChange={handleInput}
              error={errors.name}
            />
            <Input
              label="Номер телефона"
              type="number"
              name="phone_number"
              value={data.phone_number}
              onChange={handleInput}
              error={errors.phone_number}
            />
            <Input
              label="Почта"
              name="email"
              type="email"
              value={data.email}
              onChange={handleInput}
              error={errors.email}
            />
            <Input
              label="Пароль"
              name="password"
              type="password"
              value={data.password}
              onChange={handleInput}
              error={errors.password}
            />
            <div className=" mt-4  login w-full flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4 mt-2"
                type="submit"
              >
                Зарегистрироваться
              </button>
            </div>
            <span className="text-slate-400 flex justify-center">
              У вас уже есть аккаунт?
            </span>
            <Link to="/login">
              <p className="text-blue-600 text-center">Войти</p>
            </Link>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Registration;
