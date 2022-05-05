import React from "react";
import { Link } from "react-router-dom";
const EmailSent = ({email}) => {
  return (
    <form className="w-4/5 flex flex-col items-center">
      <p>Данные для восстановления успешно отправлены на вашу почту {email}</p>
      <Link to="/login">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-2"
        type="submit"
      >
        На главную
      </button>
      </Link>
    </form>
  );
};

export default EmailSent;
