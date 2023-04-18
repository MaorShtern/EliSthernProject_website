import React from 'react'
import { images } from '../../images'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { Button } from "@nextui-org/react";
import Head from 'next/head';


export default function HomePage() {
    return (
        <div >
            <Head>
                <title>דף הבית - אלי שטרן פרוייקטים</title>
            </Head>
            <div >
                <Image
                    style={{ width: '100%',  }}
                    src={images.homePage_image}
                    priority
                    alt="" />
            </div >


            <div style={{ display: 'flex', justifyContent: 'center', marginTop: -30 }}>
                <div style={{ textAlign: 'center', width: 850 }}>
                    <p style={{ fontSize: 50 }}>אנחנו בונים את העתיד</p>
                    <p style={{ fontSize: 20, marginTop: -30, direction: 'rtl' }}>כל פרויקט בניה קטן כגדול דורש שילוב של אלמנטים רבים ושונים (עיצוב, תכנון, בחירת חומרים, ביצוע, מים, חשמל ועוד..) הצלחת הפרויקט תלויה רבות ביכולת הראיה הכוללת והטמעתה האופטימלית בשילוב כל האלמנטים השונים. אנו נותנים מענה מלא תחת גג אחד ונהפוך כל אלו ליצירה אחת מושלמת.</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>

                        <Link style={{ textDecoration: 'none' }} href='/Com/Projects'>
                            <Button style={{ backgroundColor: 'gray' }}
                            >צפה בפרוייקטים</Button>
                        </Link>
                    </div>
                </div>
            </div>


            <div style={{ marginBottom: 0, paddingTop: '2%' }}>
                <h1 style={{
                    textAlign: 'center', fontSize: 150, color: 'gray',
                    margin: 0, marginBottom: -15
                }}>פרוייקטים</h1>


                <div className={styles.Images_Con}>
                    <div className={styles.Image_Segment}>
                        <Link
                            href={{
                                pathname: 'Com/Projects',
                                query: { title: 'Private_Construction' }
                            }}>
                            <Image className={styles.Image} src={images.Private_Construction_image} alt='' />
                            <h3 className={styles.Text}> בנייה פרטית</h3>
                        </Link>
                    </div>
                    <div className={styles.Image_Segment} style={{ maxWidth: '32%' }}>
                        <Link
                            href={{
                                pathname: 'Com/Projects',
                                query: { title: 'Industrial_Construction' }
                            }}>
                            <Image className={styles.Image} src={images.Industrial_Construction_image} alt='' />
                            <h3 className={styles.Text}> בנייה תעשייתית </h3>
                        </Link>
                    </div>
                    <div className={styles.Image_Segment}>
                        <Link
                            href={{
                                pathname: 'Com/Projects',
                                query: { title: 'Import_Of_Steel' }
                            }}>
                            <Image className={styles.Image} src={images.Import_Of_Steel_Products_image} alt='' />
                            <h3 className={styles.Text}> ייבוא פלדה </h3>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}
