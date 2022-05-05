import { React, useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const YandexMaps = ({ fridges = [] }) => {
  let [currentLatitude] = useState(43.23364);
  let [currentLongitude] = useState(76.779491);

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   setcurrentLatitude(position.coords.latitude);
    //   setcurrentLongitude(position.coords.longitude);
    // });
  }, []);

  return (
    <div className="map_container">
      <YMaps>
        <Map
          width="100%"
          height="100vh"
          defaultState={{
            center: [currentLatitude, currentLongitude],
            zoom: 13,
          }}
          state={{
            center: [currentLatitude, currentLongitude],
            zoom: 14,
          }}
        >
          <Placemark
            geometry={[currentLatitude, currentLongitude]}
            options={{ preset: "islands#redDotIcon" }}
            properties={{}}
          />

          {fridges.map((fridge) => (
            <Placemark
              defaultGeometry={[
                fridge.location.latitude,
                fridge.location.longitude,
              ]}
              key={fridge.id}
              options={{ preset: "islands#geolocationIcon" }}
              modules={["geoObject.addon.balloon"]}
              properties={{
                balloonContentBody: `<ul>
                  <li>${fridge.name}</li>
                  <li>${fridge.location.city}</li>
                  <li>${fridge.location.district}</li>
                  <li>${fridge.location.name}</li>
                  <li></li>
                </ul>`,
              }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
};
export default YandexMaps;
