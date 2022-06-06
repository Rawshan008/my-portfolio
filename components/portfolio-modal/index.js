import React from "react";

const PortfolioModal = (props) => {
  return (
    <div>
      <div className="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center">
        <div className="w-96 bg-white text-center">
          <button onClick={props.onClose}>Close</button>
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
