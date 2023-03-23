import React, { useContext } from 'react'
import styles from '../../styles/ContactUsStyles.module.css'
import { images } from '../../images'
import Image from 'next/image'


export default function ContactUs() {


  const Divaider = () =>{
    return(
      <>
       <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 15, marginBottom: 15, color: 'blue' }}>
          ---------------------------------------------------------------------------------------------------------------
        </div>
        </>
    )
  }



  return (
    <div className={styles.ContactUs_Con}>

      <div className={styles.Contact_File}>
        <h2 > פנייה דרך טופס יצירת קשר </h2>
        <Divaider/>
        <Divaider/>
      </div>

      <div style={{width:'5%'}}></div>

      <div className={styles.Con_Detailes}>
        <h2 > פרטי יצירת קשר</h2>
        <Divaider/>


        <div style={{display: 'flex', flexDirection:'column', fontSize:25, direction:'rtl'}}>
          <a>כתובת: עין שמר</a>
          <a>טלפון: 0525409578</a>
          <a>מייל: Eli@esprojects.co.il</a>
        </div>

        <div style={{display:'flex',  alignItems:'center', width:'50%',paddingLeft:'40%', paddingTop:'4%' }}>
          <Image style={{ height:'10%', width:'10%'}} src={images.facebook_icon} alt="יש להוסיף קישור"/>
          <div style={{width:'10%'}}></div>
          <Image style={{ height:'10%', width:'10%'}} src={images.gmail_icon} alt="יש לפתוח אפשרות לשלוח מייל"/>
        </div>


        <Divaider/>
      </div>
    </div>
  )
}


ContactUs.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}

