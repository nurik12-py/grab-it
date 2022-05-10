import { FC } from "react";

interface EmailProps {
  email: string;
}

const EmailSent: FC<EmailProps> = ({ email }) => {
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
