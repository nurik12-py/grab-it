import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spiner";
import { getOrder } from "../services/ordersService";

const Order = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const res = await getOrder(id);
    const order = res.data;
    console.log(order);
    setItems(order.items);
    setDetails({
      fridgeName: order.fridge.name,
      time: order.time,
      locationName: order.fridge.location.name,
    });
    setLoading(false);
  }, []);
  return (
    <div>
      {/* <Navbar title={"Покупка №" + id} /> */}
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
              <span>{details.fridgeName}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Адрес: </span>
              <span>{details.locationName}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Дата покупки: </span>
              <span>{details.time}</span>
            </li>
            <h1 className="text-center font-medium mt-6">Купленные продукты</h1>
            {items.map((item) => (
              <div
                href="#"
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
      {/* <Navigation /> */}
    </div>
  );
};

export default Order;
