import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spiner";
import { Item, Order } from "../models/order";
import { getOrder } from "../services/ordersService";

const OrderDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState<Item[]>([]);
  const [order, setOrder] = useState<Order | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrder(id!)
      .then((res) => {
        const order = res.data;
        setItems(order.items);
        setOrder(order);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="mt-20">
          <Spinner />
        </div>
      ) : (
        <div className="pt-16 px-2 mt-3">
          <ul className="px-4 py-2 border rounded-md">
            <h1 className="text-center p-3 font-medium">Детали покупки</h1>
            <li className="flex items-center justify-between">
              <span>Название: </span>
              <span>{order?.fridge?.name}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Адрес: </span>
              <span>{order?.locationName}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Дата покупки: </span>
              <span>{order?.time}</span>
            </li>
            <h1 className="text-center font-medium mt-6">Купленные продукты</h1>
            {items.map((item) => (
              <div
                className="flex items-center gap-3 py-3"
                aria-current="true"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt=""
                  className="rounded-circle w-16 h-16 flex-shrink-0 object-cover"
                />
                <div className="flex gap-2 w-full justify-between">
                  <div>
                    <h6 className="mb-0 font-medium">{item.name}</h6>
                    <p className="mb-2 text-gray-500 text-sm">
                      Срок годности: {item.expired_at}
                    </p>
                    <h6 className="mb-0 font-medium">
                      {item.cost} тг - {item.pivot.purchased_count}шт
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
