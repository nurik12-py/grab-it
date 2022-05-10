import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faUser } from "@fortawesome/free-regular-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <div className="w-full fixed bottom-0 bg-white border-t-2 border-slate-100 p-3">
      <div className="row grid grid-cols-3 font-bold">
        <div className="span-col-1">
          <NavLink to="/" className="flex flex-col items-center ">
            <FontAwesomeIcon icon={faMap} className="icon" />
            <span style={{ fontSize: "14px" }}>Карта</span>
          </NavLink>
        </div>
        <div className="span-col-1">
          <NavLink to="/orders" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faList} className="icon" />
            <span style={{ fontSize: "14px" }}>Покупки</span>
          </NavLink>
        </div>
        <div className="span-col-1">
          <NavLink to="/profile" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span style={{ fontSize: "14px" }}>Профиль</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
