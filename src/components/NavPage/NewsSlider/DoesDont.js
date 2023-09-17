import React from 'react'

function DoesDont() {
  return (
    <>
    <div className="container">
        <h2>Do's & Don't</h2>
        <div className="row">
            <div className="col-6">
                <button>Earthquake</button>
            </div>
            <div className="col-6">
                <button>Floods</button>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <button>Cyclone</button>
            </div>
            <div className="col-6">
                <button>Tsunami</button>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <button>Gas Leak</button>
            </div>
            <div className="col-6">
                <button>Buildig Collpse</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default DoesDont