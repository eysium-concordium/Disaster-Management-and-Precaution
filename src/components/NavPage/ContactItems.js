import React, { useState } from 'react'
import './ContactItem.css'
import Menu from '../../ContactApi';
import ContactCard from './ContactCard';

function ContactItems() {
    const [MenuData, setMenuData]=useState(Menu);
  return (
    <>
    <ContactCard MenuData={MenuData}/>
    </>
  );
}

export default ContactItems