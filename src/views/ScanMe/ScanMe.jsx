import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import PurchaseComplated from "./PurchaseComplated";
import FirdgeBusy from "./FridgeBusy";
import PurchaseStart from "./PurchaseStart";
import LockTimer from "./LockTimer";
import Welcome from "./Welcome";
import FirdgeError from "./FridgeError";

const ScanMe = () => {
  const [newSocket, setSocket] = useState(null);
  const [closed, setClosed] = useState(true);
  const [locked, setLocked] = useState(true);
  const [status, setStatus] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_SOCKET_URL);
    const token = localStorage.getItem("token");

    newSocket.on("connect", (socket) => {
      newSocket.emit("join", { clientId: token });
    });

    newSocket.on("closed", ({ state }) => {
      setClosed(state);
      if (state) {
        setStatus(3);
        console.log("Finish!");
        newSocket.disconnect();
      } else {
        setStatus(2);
      }
    });

    newSocket.on("locked", ({ state }) => {
      setLocked(state);
      // if (state) setStatus(2);
    });

    newSocket.on("info", ({ msg }) => {
      alert(msg);
      newSocket.disconnect();
    });

    newSocket.on("connect_error", () => {
      alert("Ой что-то пошло не так!");
    });

    setSocket(newSocket);
  }, [setSocket]);

  const openDoor = () => {
    console.log("Open send");
    const token = localStorage.getItem("token");
    console.log(newSocket);
    newSocket.emit("direct", { receiver: id, sender: token, signal: "open" });
    setStatus(1);
  };

  const timerComplate = () => {
    if (closed) return setStatus(0);
    setStatus(2);
  };

  return (
    <div className="w-full h-screen">
      <div className="h-full py-20">
        <Navbar title={"Grab it 🍏"} />
        <p className="text-center absolute top-20 left-1/2 -translate-x-1/2">
          Холодильник: #{id}
        </p>
        {status == 0 ? (
          <Welcome onTap={openDoor} />
        ) : status == 1 ? (
          <LockTimer onComplate={timerComplate} />
        ) : status == 2 ? (
          <PurchaseStart />
        ) : status == 3 ? (
          <PurchaseComplated />
        ) : status == 4 ? (
          <FirdgeBusy />
        ) : (
          <FirdgeError />
        )}
      </div>
    </div>
  );
};

export default ScanMe;
