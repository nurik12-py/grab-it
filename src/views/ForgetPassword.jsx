import React, { useState } from "react";
import EmailSent from "../components/EmailSent";
import EnterEmail from "../components/EnterEmail";
const ForgetPassword = () => {
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setEmail(e.target[0].value);
  };
  return (
    <div className="w-full flex h-screen justify-center items-center ">
      {isSent ? <EmailSent email={email}/> : <EnterEmail onSubmit={onSubmit} email={email} />}
    </div>
  );
};

export default ForgetPassword;
