import React from 'react'
import './DoesDont.css';

function DoesDont() {
  return (
    <>
        <h2>Do's & Don't</h2>
    <div className="container1">
            <div >
                <button className="btn btn-warning">Earthquake</button>
                <button className="btn btn-warning">Floods</button>
            </div>
            
            <div >
                <button className="btn btn-warning">Cyclone</button>
                <button className="btn btn-warning">Tsunami</button>
            </div>
           
            <div >
                <button className="btn btn-warning">Gas Leak</button>
                <button className="btn btn-warning">Buildig Collpse</button>
            </div>
            
    </div>
    </>
  )
}

export default DoesDont