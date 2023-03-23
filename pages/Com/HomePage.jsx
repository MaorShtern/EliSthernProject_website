import React, { useContext, useEffect } from 'react'
import { images } from '../../images'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { Button } from '@chakra-ui/react'


export default function HomePage() {
    return (
        <div>
            <div >
                <Image
                    className={styles.homePage_image}
                    src={images.homePage_image}
                    priority
                    alt="" />
            </div >


            <div style={{ display: 'flex', justifyContent: 'center', marginTop: -30 }}>
                <div style={{ textAlign: 'center', width: 850 }}>
                    <p style={{ fontSize: 50 }}>אנחנו בונים את העתיד</p>
                    <p style={{ fontSize: 20, marginTop: -30 }}>כל פרויקט בניה קטן כגדול דורש שילוב של אלמנטים רבים ושונים (עיצוב, תכנון, בחירת חומרים, ביצוע, מים, חשמל ועוד..) הצלחת הפרויקט תלויה רבות ביכולת הראיה הכוללת והטמעתה האופטימלית בשילוב כל האלמנטים השונים. אנו נותנים מענה מלא תחת גג אחד ונהפוך כל אלו ליצירה אחת מושלמת.</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>

                        <Link style={{ textDecoration: 'none' }} href='/Com/Projects'>
                            <Button style={{ cursor: "pointer" }} colorScheme='teal' variant='solid'>
                                צפה בפרוייקטים
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>


            <div style={{ marginBottom: 0 }}>
                <h1 style={{
                    textAlign: 'center', fontSize: 150, color: 'gray',
                    margin: 0, marginBottom: 0
                }}>פרוייקטים</h1>


                <div className={styles.Images_Con}>
                    <div className={styles.Image_Segment}>
                        <Image className={styles.Image} src={images.Private_Construction_image} alt='' />
                        <div className={styles.Text}>
                            <h3> בנייה פרטית</h3>
                        </div>
                    </div>
                    <div className={styles.Image_Segment} style={{ maxWidth: '32%' }}>
                        <Image className={styles.Image} src={images.Industrial_Construction_image} alt='' />
                        <div className={styles.Text}>
                            <h3> בנייה תעשייתית </h3>
                        </div>
                    </div>
                    <div className={styles.Image_Segment}>
                        <Image className={styles.Image} src={images.Import_Of_Steel_Products_image} alt='' />
                        <div className={styles.Text}>
                            <h3> ייבוא פלדה </h3>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
