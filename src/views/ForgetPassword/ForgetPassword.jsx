import React, { useState } from "react";
import { sendRecoveryLink } from "../../services/passwordService";
import EmailSent from "./EmailSent";
import EnterEmail from "./EnterEmail";
const ForgetPassword = () => {
  const [isSent, setIsSent] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [email, setEmail] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    setValidEmail(true);
    const email = e.target[0].value;
    try {
      await sendRecoveryLink(email);
      setEmail(email);
      setIsSent(true);
    } catch (err) {
      setValidEmail(false);
    }
  };

  return (
    <div className="w-full flex flex-col h-screen justify-center items-center ">
      <h1 className="text-center text-2xl">🍏</h1>
      <h1 className="mb-8 font-bold text-center text-2xl">Grab it</h1>
      {isSent ? (
        <EmailSent email={email} />
      ) : (
        <EnterEmail onSubmit={onSubmit} email={email} validEmail={validEmail} />
      )}
    </div>
  );
};

export default ForgetPassword;
