import React from 'react'
// import hosimg from './images/hospital-building_2749678.png'


function ContactCard({MenuData}) {
  return (
    <>
    {MenuData.map((curEle)=>{
        return(
            <div className="contactItem">
        <div className="firstBlock">
            <img src={curEle.image} alt="" height={60} />
            <span>{curEle.text1}</span>
        </div>
        <div className="secondBlock">
           <p>Phone NO:{curEle.phone}</p>
           <p>Email ID : {curEle.email}</p> 

        </div>
    </div>
        );
    })}
    
    <hr />
    </>
  )
}

export default ContactCard;