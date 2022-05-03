import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
const PurchaseComplated = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <ShoppingCartIcon className="h-10 w-10 mb-2"/>
      <p className="text-center font-bold mb-2">Покупка завершена!</p>
      <button className="text-center text-sm px-4 py-2 font-medium bg-blue-500 text-white rounded">
        К покупкам
      </button>
    </div>
  );
};

export default PurchaseComplated;
