import React from 'react'
import styles from '../styles/NavbarStyle.module.css'
import { images } from '../images'
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
    return (
        <div className={styles.Navbar_Container}>
            <div className={styles.Navbar_Options}>
                <Link className={styles.Link_ContactUs} href='/Com/ContactUs'>צור קשר</Link>
                <Link className={styles.Links} href="/Com/About">אודות</Link>
                <Link className={styles.Links} href='/Com/AreasOfExpertise'>תחומי עניין</Link>
                <Link className={styles.Links} href='/Com/Projects'>פרוייקטים</Link>
                <Link className={styles.Links} href='/'>דף הבית</Link>
            </div>
            <div>
                <Link className={styles.Links} href='/'>
                    <div className={styles.Navbar_Logo}>
                        <Image className={styles.Logo} src={images.logo} alt="logo" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
