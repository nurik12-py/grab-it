import React from "react";
import { ClockIcon } from "@heroicons/react/outline";
const FirdgeBusy = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <ClockIcon className="h-10 w-10 mb-2"/>
      <p className="text-center font-bold mb-2">
        Кто-то совершает покупку ожидайте
      </p>
    </div>
  );
};

export default FirdgeBusy;
