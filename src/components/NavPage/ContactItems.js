import React from 'react'
import './ContactItem.css'
import hosimg from './images/hospital-building_2749678.png'
import Menu from '../../ContactApi';

function ContactItems() {
  return (
    <>
    <div className="contactItem">
        <div className="firstBlock">
            <img src={hosimg} alt="hospital Images" height={60} />
            <span>PUBLIC HEALTH DEPARTMENT</span>
        </div>
        <div className="secondBlock">
           <p>Phone NO: 9999999999</p>
           <p>Email ID : publichealth@gmail.com</p> 

        </div>
    </div>
    <hr />
    </>
  );
}

export default ContactItems