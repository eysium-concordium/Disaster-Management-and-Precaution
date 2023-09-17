import React from 'react'
import './Footer.css'

function footer() {
  return (
    <>
    <div className="container cont1">
        <div className="row">
            <div className="col-6">
                <label htmlFor="Enter email for warning and prealerts : "></label>
                <input type="email" name="email" id="email" />
                <button>Submit</button>
            </div>
            <div className="col-6">
                <h2>To join as Voluteer</h2>
                <button>REGISTSER</button>
            </div>
        </div>
    </div>
    <div className="container cont2">
    © Copyright 2023
    </div>
    </>
  )
}

export default footer;