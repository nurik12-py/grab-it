import React, { useState, useEffect } from "react";
import { getUser } from "../services/userService";
import { logout } from "../services/authService";
import Input from "../components/Input";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone_number: "",
    email: "",
  });

  useEffect(() => {
    getUser().then((res) => {
      setUserData(res.data);
    });
  }, []);

  const handleClick = () => {
    logout();
    window.location = "/login";
  };

  return (
    <div className="h-full w-full mt-20">
      <div className="flex flex-col justify-center items-center ">
        <div className="bg-slate-700 w-36 h-36 rounded-full"></div>
        <div className="w-3/4">
          <Input
            name="name"
            disabled={true}
            value={userData.name}
            label="Имя"
          />
          <Input
            name="phone_number"
            disabled={true}
            value={userData.phone_number}
            label="Номер телефона"
            type="number"
          />
          <Input
            name="email"
            disabled={true}
            value={userData.email}
            label="Почта"
            type="email"
          />
        </div>
        <button
          onClick={handleClick}
          className=" mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4"
          type="submit"
        >
          Выйти
        </button>
      </div>
    </div>
  );
};
export default Profile;
