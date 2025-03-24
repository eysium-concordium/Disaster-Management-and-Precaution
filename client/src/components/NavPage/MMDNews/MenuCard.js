import React from "react";
import './style.css';

const MenuCard = ({ menuData }) => {
  return (
    <section className="main-card-container container">
      <div className="row">
        {menuData.map((curElem) => {
          return (
            <div className="col-md-4 mb-4" key={curElem.id}>
              <div className="card h-100 shadow-sm">
                <img src={curElem.image} alt={curElem.name} className="card-img-top card-media" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{curElem.name}</h5>
                  <p className="card-text">{curElem.description}</p>
                  <button className="btn btn-primary mt-auto">Read More</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MenuCard;