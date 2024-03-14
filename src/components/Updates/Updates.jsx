import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  return (
    <div className="Updates-container">
      {" "}
      {/* Add a container div */}
      <div className="Updates">
        {" "}
        {/* Keep your existing Updates div */}
        {UpdatesData.map((update) => {
          return (
            <div className="update" key={update.id}>
              {" "}
              {/* Add a unique key */}
              <img src={update.img} alt="profile" />
              <div className="noti">
                <div style={{ marginBottom: "0.5rem" }}>
                  <span>{update.name}</span>
                  <span> {update.noti}</span>
                </div>
                <span>{update.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Updates;
