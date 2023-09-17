import React from 'react'
import ContactItems from "./ContactItems"
import Alert from './Alert'
function Emergency() {
  return (
    <>
  <Alert/>
    <h1>Emergency Contact </h1>
      <ContactItems/>
    </>
  )
}

export default Emergency;