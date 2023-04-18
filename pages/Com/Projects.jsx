import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Com_Styles/ProjectsStyles.module.css'
import Head from 'next/head';
import Projects_Cards from './cards/Projects_Cards'
import AppContext from '../../AppContext';


const projects_Category = [
    {
        key: "All_Categories",
        title: "כול הפרוייקטים"
    },
    {
        key: "Private_Construction",
        title: "בנייה פרטית"
    },
    {
        key: "Industrial_Construction",
        title: "בנייה תעשייתית"
    },
    {
        key: "Import_Of_Steel",
        title: "ייבוא פלדה"
    },
]



export default function Projects({ data }) {

    const router = useRouter()
    const [category, setCategory] = useState(projects_Category[0])
    const size = useContext(AppContext);


    // console.log(data);

    useEffect(() => {
        let data = router.query.title;
        if (data !== undefined)
            setCategory(projects_Category.filter((item) => data === item.key)[0])
    }, [])




    const progects_Cards_Layout = () => {
        return (
            <>
                <div className={styles.progects_Cards_Con}>
                    <div className={styles.row}>
                        {
                            category === projects_Category[0] ?
                                data.map((item, index) =>
                                (
                                    <div key={index}
                                        className={!size.isSmall ? styles.column : styles.column_small} >
                                        <Projects_Cards key={index} data={item} />
                                    </div>
                                )) :
                                data.filter((item) => item.category === category.key).map(
                                    (item, index) =>
                                    (
                                        <div key={index}
                                            className={!size.isSmall ? styles.column : styles.column_small} >
                                            <Projects_Cards key={index} data={item} />
                                        </div>
                                    )
                                )
                        }
                    </div>
                </div>
            </>
        )
    }




    return (
        <>
            <div style={{ direction: 'rtl' }}>
                <Head>
                    <title>פרוייקטים</title>
                </Head>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: 50 }}>פרוייקטים</h1>
                </div>

                <div style={{ height: 1, backgroundColor: 'blue', width: '50%', marginRight: '25%' }} ></div>

                <div className={styles.Category_Opstions_Con}>
                    <ul className={styles.Category_Opstions_List}>
                        {projects_Category.map((item, index) =>
                            <li key={index}>
                                <button
                                    className={category.key === item.key ? styles.Category_Opstion_press : styles.Category_Opstion}
                                    onClick={() => setCategory(item)} >
                                    {item.title}
                                </button>
                            </li>
                        )}
                    </ul>
                </div>

                <div>
                    {progects_Cards_Layout()}
                </div>

            </div>
        </>
    )
}


export async function getStaticProps() {
    let res = await fetch('http://localhost:3000/api/Api_Projects_Data', { method: 'GET' })
    let data = await res.json()
    return {
        props: { data },
    }
}

