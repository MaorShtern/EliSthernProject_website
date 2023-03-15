import React from 'react'
import Navbar from '../../Layout/Navbar'

export default function ContactUs() {
  return (
    <div>ContactUs</div>
  )
}


ContactUs.getLayout = function PageLayout(page) {
  return (
    <>
      <Navbar />
      {page}
    </>
  )
}

