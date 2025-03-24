import React, { useState } from 'react';
import './DoesDont.css';

function DoesDont() {
  const [selectedButton, setSelectedButton] = useState(null);

  const data = {
    Earthquake: "During an earthquake, drop, cover, and hold on. Stay indoors until the shaking stops.",
    Floods: "Move to higher ground immediately. Avoid walking or driving through floodwaters.",
    Cyclone: "Secure loose items and stay indoors. Follow evacuation orders if issued.",
    Tsunami: "Move to higher ground or inland immediately. Stay away from the coast.",
    "Gas Leak": "Turn off the gas supply and open windows. Avoid using electrical switches.",
    "Building Collapse": "Call emergency services immediately. Avoid entering damaged buildings.",
  };

  const handleButtonClick = (button) => {
    setSelectedButton(selectedButton === button ? null : button); 
  };

  return (
    <div className="doesdont-container">
      <h2 className="mb-4">Do's & Don'ts</h2>
      <div className="container">
        <div className="row mb-3">
          {Object.keys(data).map((key, index) => (
            <div key={index} className="col-md-6 d-flex flex-column align-items-center mb-2">
              <button
                className="btn btn-warning w-75"
                onClick={() => handleButtonClick(key)}
              >
                {key}
              </button>
              {selectedButton === key && (
                <div className="info-box mt-2 p-3 bg-light border rounded">
                  {data[key]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoesDont;