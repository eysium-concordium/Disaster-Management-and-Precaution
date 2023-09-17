import React from "react";
// import './style.css';
const MenuCard = ({ menuData }) => {
  // console.log(menuData);
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    
                    <img
                    src={curElem.image}
                    alt="images"
                    className="card-media"
                  />
                    <h2 className="card-title">{curElem.name}</h2>
                    
                    <span className="card-description subtle">
                      {curElem.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  
                  
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
