import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/FotterStyle.module.css'
import AppContext from '../AppContext'
import { Button } from '@chakra-ui/react'


export default function Footer() {


    const size = useContext(AppContext)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const Check_Contact_Details = () => {
        // console.log("contact: " + JSON.stringify(contact));

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
        setButtonLoading(true)
    }



    return (
        <>
            <div >
                <div className={styles.Footer_Container}>
                    <div style={{ maxWidth: '100%', display: 'flex', textAlign: 'center' }}>
                        <div style={{ width: '25%' }}></div>
                        <div style={{ width: '50%' }}>
                            <h1 style={{ fontSize: 40 }}>יש לכם פרויקט לביצוע?</h1>
                            <p style={{ fontSize: 22 }} >לאלי שטרן פרויקטים יש את הידע, הכלים והניסיון להוציא את הפרוייקט לפועל על הצד הטוב ביותר פנו אלינו עוד היום לקבלת פרטים נוספים</p>
                        </div>
                        <div style={{ width: '25%' }}></div>
                    </div>


                    <div className={styles.Form_Container}>

                    {/* {flexDirection:'column', dir:'rtl'}} */}

                        <form className={!size.isSmall ?  styles.Form : styles.small_Form }>
                            <input className={styles.Inputs} type='text' placeholder='שם מלא'
                                onChange={(e) => contact.name = e.target.value}
                            />
                            <input className={styles.Inputs} type='number' placeholder='טלפון'
                                onChange={(e) => contact.phone = e.target.value}
                            />
                            <input className={styles.Inputs} type='email' placeholder='מייל'
                                onChange={(e) => contact.email = e.target.value}
                            />
                        </form>
                        <Button
                            className={styles.Sub_Btn}
                            onClick={() => Check_Contact_Details()}
                            isLoading={buttonLoading}
                        >
                            שליחה
                        </Button>



                    </div>
                    <div className={!size.isSmall ? styles.Contacts_Container : {flexDirection:'column',padding: 120}}>
                        <div style={{ display: 'flex', flexDirection: 'column',textAlign: 'center' }}>
                            <a style={{ fontSize: '300%' }}>Address</a>
                            <a style={{ fontSize: '150%' }}>עין שמר</a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <a style={{ fontSize: '300%' }}>Email</a>
                            <a style={{ fontSize: '150%' }}>eli@esprojects.co.il</a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <a style={{ fontSize: '300%' }}>Phone</a>
                            <a style={{ fontSize: '150%' }}>0525407098</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

