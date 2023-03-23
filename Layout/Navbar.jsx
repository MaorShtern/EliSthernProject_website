import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/NavbarStyle.module.css'
import { images } from '../images'
import Image from 'next/image'
import Link from 'next/link'
import AppContext from '../AppContext'
import { motion } from "framer-motion"


const Array_Options = [
    {
        text: 'צור קשר',
        link: "/Com/ContactUs"
    },
    {
        text: 'אודות',
        link: "/Com/About"
    },
    {
        text: 'תחומי עניין',
        link: "/Com/AreasOfExpertise"
    },
    {
        text: 'פרוייקטים',
        link: "/Com/Projects"
    },
    {
        text: 'דף הבית',
        link: "/"
    },
]



export default function Navbar() {

    const size = useContext(AppContext);
    const [menuFlag, setMenuFlag] = useState(false)

    const Main_Menu_Layout = () => {
        return (
            <>
                <div className={styles.Navbar_Container}>
                    <div className={styles.Navbar_Options}>
                        <ul className={styles.menuList}>
                            {Array_Options.map((option, index) =>
                                <li key={index}>
                                    <Link className={styles.Links} href={`${option.link}`}
                                    >{option.text}</Link>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <Link href='/'>
                            <div >
                                <Image className={styles.Logo} src={images.logo} alt="logo" priority />
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }


    const Menu_Options_Layout = () => {
        return (
            <>
                <div>
                    <div className={styles.Navbar_Container}>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.1 }}
                        >
                            <div>
                                <Image className={styles.menu_icon}
                                    src={menuFlag ? images.x_icon : images.Hamburger_icon}
                                    alt=""
                                    onClick={() => setMenuFlag(!menuFlag)}
                                />
                            </div>
                        </motion.div>
                        <div>
                            <Link className={styles.Links} href='/'>
                                <div className={styles.Navbar_Logo}>
                                    <Image className={styles.Logo} src={images.logo} alt="logo" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    {menuFlag ? (
                        <motion.div
                        style={{marginTop:-14}}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 15 }}
                            // transition={{
                            //     delay: 0.1,
                            //     duration: 0.5
                            // }}
                            >
                            <ul className={styles.Menu_Options_Container}>
                                {Array_Options.map((option, index) =>
                                    <li key={index}
                                        className={styles.Menu_Options}>
                                        <Link
                                            href={`${option.link}`}
                                            className={styles.Links}
                                            onClick={() => setMenuFlag(false)}
                                        >{option.text}</Link>
                                    </li>)
                                }
                            </ul>
                        </motion.div>) : null}
                </div>
            </>
        )
    }

    // return (<Main_Menu_Layout />)

    if (!size.isSmall)
        return (<Main_Menu_Layout />)
    else
        return (<Menu_Options_Layout />)
}




  // ///   -----------------   גירסה ראשונה  --------------------------------
        // <div className={styles.Navbar_Container}>
        //     <div className={styles.Navbar_Options}>
        //         <Link style={{ textDecoration:'none'}} href='/Com/ContactUs'>
        //             <Button color="warning" auto >
        //                 צור קשר
        //             </Button>
        //         </Link>
        //         <Link className={styles.Links} href="/Com/About">אודות</Link>
        //         <Link className={styles.Links} href='/Com/AreasOfExpertise'>תחומי עניין</Link>
        //         <Link className={styles.Links} href='/Com/Projects'>פרוייקטים</Link>
        //         <Link className={styles.Links} href='/'>דף הבית</Link>
        //     </div>
        //     <div>
        //         <Link className={styles.Links} href='/'>
        //             <div className={styles.Navbar_Logo}>
        //                 <Image className={styles.Logo} src={images.logo} alt="logo" />
        //             </div>
        //         </Link>
        //     </div>
        // </div>
