import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
const PurchaseStart = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <ShoppingCartIcon className="h-10 w-10 mb-2"/>
      <p className="text-center font-bold">Возьмите нужные товары</p>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm">
        Для завершения покупки закройте дверцу
      </p>
    </div>
  );
};

export default PurchaseStart;
