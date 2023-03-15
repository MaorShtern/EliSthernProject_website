import React, { useEffect, useState } from 'react'
import styles from '../styles/NavbarStyle.module.css'
import { images } from '../images'
import Image from 'next/image'
import Link from 'next/link'
import { blue, Button } from "@nextui-org/react";


export default function Navbar() {

    const [size, setTemp] = useState({
        width: undefined,
        minWidth: 900,
        isSmall: false,
    })
    const [menuFlag, setMenuFlag] = useState(true)


    const handleResize = () => {
        setTemp({
            width: window.innerWidth,
            isSmall: size.minWidth >= window.innerWidth ? true : false
        });
    }


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize()
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    const Main_Menu_Layout = () => {
        return (
            <>
                <div className={styles.Navbar_Container}>

                    <div className={styles.Navbar_Options}>
                        <ul className={styles.menuList}>
                            <li><Link className={styles.Links} href='/Com/ContactUs'>צור קשר</Link></li>
                            <li><Link className={styles.Links} href="/Com/About">אודות</Link></li>
                            <li><Link className={styles.Links} href='/Com/AreasOfExpertise'>תחומי עניין</Link></li>
                            <li> <Link className={styles.Links} href='/Com/Projects'>פרוייקטים</Link></li>
                            <li><Link className={styles.Links} href='/'>דף הבית</Link> </li>
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
                    <div>
                        {
                            menuFlag ? (
                                <div className={styles.Navbar_Container}>
                                    <div>
                                        <Image className={styles.menu_icon}
                                            src={images.Hamburger_icon} alt=''
                                            onClick={() => setMenuFlag(!menuFlag)}
                                        />
                                    </div>
                                    <div>
                                        <Link className={styles.Links} href='/'>
                                            <div className={styles.Navbar_Logo}>
                                                <Image className={styles.Logo} src={images.logo} alt="logo" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className={styles.Navbar_Container}>
                                        <div>
                                            <Image
                                                className={styles.menu_icon}
                                                src={images.x_icon} alt=''
                                                onClick={() => setMenuFlag(!menuFlag)}
                                            />
                                        </div>
                                        <div>
                                            <Link className={styles.Links} href='/'>
                                                <div className={styles.Navbar_Logo}>
                                                    <Image className={styles.Logo} src={images.logo} priority alt="logo" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className={styles.Menu_Options_Container}>
                                    <li className={styles.Menu_Options}>
                                            <Link className={styles.Links}
                                                onClick={() => setMenuFlag(true)}
                                                href='/'>דף הבית</Link>
                                        </li>
                                        <li className={styles.Menu_Options}>
                                            <Link className={styles.Links}
                                                onClick={() => setMenuFlag(true)}
                                                href='/Com/AreasOfExpertise'>תחומי עניין</Link>
                                        </li>
                                        <li className={styles.Menu_Options}>
                                            <Link className={styles.Links}
                                                onClick={() => setMenuFlag(true)}
                                                href='/Com/Projects'>פרוייקטים</Link>
                                        </li>
                                
                                        <li className={styles.Menu_Options}>
                                            <Link className={styles.Links}
                                                onClick={() => setMenuFlag(true)}
                                                href='/Com/About'>אודות</Link>
                                        </li>
                                        <li className={styles.Menu_Options}>
                                            <Link className={styles.Links}
                                                onClick={() => setMenuFlag(true)}
                                                href='/Com/ContactUs'>צור קשר</Link>
                                        </li>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </>
        )
    }



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
