import React from "react";
import "bootstrap-icons/icons/hand-index-thumb-fill.svg";
const Welcome = ({ onTap }) => {
  return (
    <div
      onClick={onTap}
      className="h-full flex flex-col items-center justify-center cursor-pointer"
    >
      <div className="w-8 h-8 relative mb-2">
        <span className="animate-ping -top-1 left-2 absolute inline-flex h-2.5 w-2.5 rounded-full bg-sky-500"></span>
        <i className="bi bi-hand-index-thumb-fill absolute w-10 h-10 text-gray-700 z-10 -top-1" style={{ fontSize: 35 }}></i>
      </div>
      <p className="mt-2">Нажмите чтобы разблокировать</p>
    </div>
  );
};

export default Welcome;
