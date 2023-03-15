import React from 'react'
// import { images } from '../images'
// import Image from 'next/image'
import styles from '../styles/FotterStyle.module.css'
// import Link from 'next/link'
// import { Input, Spacer } from "@nextui-org/react";
// import { Textarea } from '@nextui-org/react';
// import { Button } from "@nextui-org/react";

export default function Footer() {


    // const Check_Contact_Details = () => {
    //     console.log("vsdvsvd");
    // }


    return (
        <>
            <div className={styles.Footer_Container}>
                <div style={{ padding: 10 }}>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: 600, textAlign: 'center' }}>
                            <h1 style={{ fontSize: 40 }}>יש לכם פרויקט לביצוע?</h1>
                            <p style={{ fontSize: 22 }} >לאלי שטרן פרויקטים יש את הידע, הכלים והניסיון להוציא את הפרוייקט לפועל על הצד הטוב ביותר פנו אלינו עוד היום לקבלת פרטים נוספים</p>
                        </div>
                    </div>


                    {/* <div>
                        <form onSubmit={Check_Contact_Details} style={{width: 1000}}>
                            <div className={styles.Contect_Input} >
                                <input className={styles.Inputs} type='text' placeholder='שם מלא' />
                                <input className={styles.Inputs} type='number' placeholder='טלפון' />
                                <input className={styles.Inputs} type='email' placeholder='מייל' />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div> */}


      


                </div>
            </div>
        </>
    )
}


{/* <div className={styles.Footer_Container}>
                <div style={{ padding: 10 }}>
                    <div className={styles.Text_Container}>
                        <h1 style={{ fontSize: 40 }}>יש לכם פרויקט לביצוע?</h1>
                        <p style={{ fontSize: 22 }} >לאלי שטרן פרויקטים יש את הידע, הכלים והניסיון להוציא את הפרוייקט לפועל על הצד הטוב ביותר פנו אלינו עוד היום לקבלת פרטים נוספים</p>
                    </div>

                    <div >
                        <div className={styles.Contect_Input}>
                            <input className={styles.Inputs} type='text' placeholder='שם מלא' />
                            <input className={styles.Inputs} type='number' placeholder='טלפון' />
                            <input className={styles.Inputs} type='email' placeholder='מייל' />
                    </div>
                    </div>
                </div>

            </div> */}
