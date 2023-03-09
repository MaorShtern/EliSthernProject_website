import React from 'react'
import { images } from '../../images'
import Image from 'next/image'
import styles from '../../styles/HomePages.module.css'
import Link from 'next/link'


export default function HomePage() {


    return (
        <div>
            <div >
                <Image
                    className={styles.img}
                    src={images.homePage_image} 
                    alt="" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: -30 }}>
                <div style={{ textAlign: 'center', width: 850 }}>
                    <p style={{ fontSize: 50 }}>אנחנו בונים את העתיד</p>
                    <p style={{ fontSize: 20, marginTop: -30 }}>כל פרויקט בניה קטן כגדול דורש שילוב של אלמנטים רבים ושונים (עיצוב, תכנון, בחירת חומרים, ביצוע, מים, חשמל ועוד..) הצלחת הפרויקט תלויה רבות ביכולת הראיה הכוללת והטמעתה האופטימלית בשילוב כל האלמנטים השונים. אנו נותנים מענה מלא תחת גג אחד ונהפוך כל אלו ליצירה אחת מושלמת.</p>
                    <Link href='/Com/Projects'>צפה בפרוייקטים</Link>
                </div>
            </div>

        </div>
    )
}
