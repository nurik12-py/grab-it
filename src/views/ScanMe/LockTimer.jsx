import React, { useEffect, useState } from "react";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/solid";

const LockTimer = ({ totalMillis = 5000, onComplate }) => {
  const [progress, setPorgress] = useState(100);
  const [millis, setMillis] = useState(totalMillis);

  useEffect(() => {
    let interval = setInterval(() => {
      if (millis < 0) {
        clearInterval(interval);
        onComplate();
      }
      setPorgress((millis * 100) / totalMillis);
      setMillis((millis) => millis - 2);
    }, 1);

    return () => clearInterval(interval);
  }, [progress, millis]);

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <LockOpenIcon className="h-10 w-10 mb-6" />
      <div className="w-1/2 mb-2 p-1 h-4 flex items-center bg-slate-200 rounded-md relative">
        <span
          style={{ width: `${progress}%` }}
          className="h-2 rounded bg-blue-500"
        ></span>
      </div>
      <p className="text-center font-bold">Откройте дверь</p>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm">
        Холодильник разблокирован
      </p>
    </div>
  );
};

export default LockTimer;
