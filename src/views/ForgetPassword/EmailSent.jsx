import React from "react";

const EmailSent = ({ email }) => {
  return (
    <form className="w-4/5 flex flex-col items-center">
      <p className="text-center">
        Данные для восстановления успешно отправлены на вашу почту:{" "}
        <b>{email}</b>
      </p>
    </form>
  );
};

export default EmailSent;
