import React, { useContext, useState } from 'react'
import styles from '../../styles/ContactUsStyles.module.css'
import { images } from '../../images'
import Image from 'next/image'
import { Listbox } from '@headlessui/react'
import { Button } from '@chakra-ui/react'
import Email from '../api/Email'
import AppContext from '../../AppContext'

const menuItems = [
  { id: 0, name: "בחר פרוייקט" },
  { id: 1, name: "בנייה פרטית" },
  { id: 2, name: "בנייה תעשייתית" },
  { id: 3, name: "ייבוא פלדה" },
];


export default function ContactUs() {

  const [projectThem, setProjectThem] = useState(menuItems[0].name)
  const [buttonLoading, setButtonLoading] = useState(false)
  const size = useContext(AppContext);


  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    projectThem: "",
    notes: "",
  })


  const Check_Contact_Details = () => {

    if (contact.name === "") {
      alert("נא למלא שם")
      return
    }
    else if (contact.phone.length != 10 || contact.phone.slice(0, 2) != '05') {
      alert("נא למלא מספר טלפון תקין")
      return
    }
    else if (contact.email.length == 0 || contact.email.indexOf('@gmail.com') == -1) {
      alert("נא למלא כתובת אימייל עם הסיומת @gmail.com")
      return
    }
    Send_Email()
  }


  const Send_Email = async () => {
    contact.projectThem = projectThem
    setButtonLoading(true)
    let text = await Email(contact)
    if (text === 200)
      alert("המייל נשלח בהצלחה");
    else
      alert("error");
    setButtonLoading(false)
  }



  const Divaider = () => {
    return (
      <>
        <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 15, marginBottom: 15, color: 'blue' }}>
          ---------------------------------------------------------------------------------------------------------------
        </div>
      </>
    )
  }



  return (
    <div className={styles.ContactUs_Con} style={{ flexDirection: size.isSmall == true ? 'column' : null }}   >

      <div className={styles.Contact_File}>
        <h2 > פנייה דרך טופס יצירת קשר </h2>
        <Divaider />

        <div className={styles.Form_Con}>
          <div className={styles.Form_Div}>

            <label htmlFor="first">שם מלא: </label>
            <input type="text" id="first" name="first"
              onChange={(e) => contact.name = e.target.value} />

            <label style={{ paddingTop: '2%' }} htmlFor="first">מייל: </label>
            <input type="text" id="first" name="first"
              onChange={(e) => contact.email = e.target.value} />

            <label style={{ paddingTop: '2%' }} htmlFor="first">מספר טלפון נייד: </label>
            <input type="number" id="first" name="first"
              onChange={(e) => contact.phone = e.target.value} />

            <label style={{ paddingTop: '2%' }} htmlFor="first">נושא: </label>
            <input style={{ marginBottom: '5%' }} type="text" id="first" name="first"
              onChange={(e) => contact.subject = e.target.value} />

            <Listbox value={projectThem} onChange={setProjectThem}>
              <Listbox.Button>{projectThem}</Listbox.Button>
              <Listbox.Options style={{ backgroundColor: 'white', marginTop: 0 }}>
                {menuItems.map((option) => (
                  <Listbox.Option key={option.id} value={option.name}                  >
                    {option.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>

            <div style={{ marginTop: '2%', paddingBottom: '15%' }}>
              <label htmlFor="first">הערות: </label>
              <textarea
                style={{ width: '100%', direction: 'rtl', height: '125%' }}
                placeholder="*הערות נוספות*"
                rows={4}
                cols={40}
                onChange={(e) => contact.notes = e.target.value}
              />
            </div>

          </div>
        </div>

        <div >
          <Button
            style={{ width: '70%', height: 30, marginTop: '5%', backgroundColor: 'black', color: 'white', }}
            onClick={() => Check_Contact_Details()}
            isLoading={buttonLoading}
          >שליחה</Button>
        </div>
        <Divaider />
      </div>


      <div style={{ width: '2.5%', height: 20 }}></div>

      <div className={styles.Con_Detailes}>
        <h2 > פרטי יצירת קשר</h2>
        <Divaider />
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 25, direction: 'rtl' }}>
          <a>כתובת: עין שמר</a>
          <a>טלפון: 0525409578</a>
          <a>מייל: Eli@esprojects.co.il</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', width: '50%', paddingLeft: '40%', paddingTop: '4%' }}>
          <Image style={{ height: '10%', width: '10%' }} src={images.facebook_icon} alt="יש להוסיף קישור" />
          <div style={{ width: '10%' }}></div>
          <Image style={{ height: '10%', width: '10%' }} src={images.gmail_icon} alt="יש לפתוח אפשרות לשלוח מייל" />
        </div>
        <Divaider />

        <div style={{ backgroundColor: 'blue', width: '95%', height: '50%', marginLeft: '2.5%' }}>
          נוסיף תמונה או של המיקום על גוגל מאפס או לא יודע מה
        </div>


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





{/* 
          <div className={styles.Form_Div}>


            <label htmlFor="first">נושא: </label>
            <input type="text" id="first" name="first" />

            * יש למצוא דרוף דאון ליסט יותר יפה
            <div style={{ height: '13%' }}></div>
            <Listbox value={projectThem} onChange={setProjectThem}>
              <Listbox.Button>{projectThem}</Listbox.Button>
              <Listbox.Options style={{ backgroundColor: 'white', marginTop: 0 }}>
                {menuItems.map((option) => (
                  <Listbox.Option key={option.id} value={option.name}                  >
                    {option.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>

            <div style={{ marginTop: '2%' }}>
              <label htmlFor="first">הערות: </label>
              <textarea
                style={{ width: '100%', direction: 'rtl', height: '125%' }}
                placeholder="*הערות נוספות*"
                rows={4}
                cols={40}
              />
            </div>
          </div>
        </div> */}
