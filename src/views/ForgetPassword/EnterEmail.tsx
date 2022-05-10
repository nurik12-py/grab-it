import React, { FC, FormEvent } from "react";
import Input from "../../components/Input";

interface EmailSentProps {
  onSubmit: (e: FormEvent) => void;
  email: string;
  validEmail: boolean;
}

const EnterEmail: FC<EmailSentProps> = ({ onSubmit, email, validEmail }) => {
  return (
    <form onSubmit={onSubmit} className="w-4/5 flex flex-col">
      <p className="text-center mb-4">
        Введите почту для отправки ссылки восстановления пароля
      </p>
      <Input
        label="Почта"
        name="email"
        type="email"
        error={!validEmail ? "Не корректные данные" : ""}
        value={email}
        placeholder={""}
      />

      <button
        className="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4"
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
};

export default EnterEmail;
