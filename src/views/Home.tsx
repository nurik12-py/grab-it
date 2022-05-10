import YandexMaps from "../components/YandexMaps";

import { useEffect, useState } from "react";
import { getFridges } from "../services/fridgeService";

const Home = () => {
  const [fridges, setFridges] = useState([]);

  useEffect(() => {
    getFridges().then((res) => {
      const { data: fridges } = res;
      setFridges(fridges);
    });
  }, []);

  return <YandexMaps fridges={fridges} />;
};
export default Home;
