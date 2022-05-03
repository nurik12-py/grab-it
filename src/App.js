import { React, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";

function App() {
  const [title, setTitle] = useState("Grab it 🍏");
  const location = useLocation();

  const getNavbarTitle = (pathname) => {
    let title = "";
    switch (pathname) {
      case "/orders":
        title = "Покупки";
        break;
      case "/profile":
        title = "Профиль";
        break;
      default:
        title = "Grab it 🍏";
        break;
    }
    return title;
  };

  useEffect(() => {
    setTitle(getNavbarTitle(location.pathname));
  }, [location.pathname]);

  return (
    <div className="w-full h-screen">
      <Navbar title={title} />
      <Outlet />
      <Navigation />
    </div>
  );
}

export default App;
