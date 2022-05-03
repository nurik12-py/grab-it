import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <FontAwesomeIcon icon={faSpinner} className="icon fa-spin fa-2x" /> 
    </div>
  );
};

export default Spinner;
