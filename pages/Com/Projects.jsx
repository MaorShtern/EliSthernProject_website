import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Com_Styles/ProjectsStyles.module.css'
import Head from 'next/head';
import Progects_Cards from './cards/Progects_Cards';

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


const projects_Data = [
    {
        name: "מבנה חנויות ומשרדים קרית גת",
        category: "Industrial_Construction",
    },
    {
        name: "מפעל עיבוד שבבי בית שאן",
        category: "Industrial_Construction",
    },
    {
        name: "מפעל אקלמטיק – ציפורית",
        category: "Industrial_Construction",
    },
    {
        name: "מרלו\"ג נעורים – חברת אלקטריאון",
        category: "Industrial_Construction",
    },
    {
        name: "חיזוק מנהרת דחיקה – חברת חשמל",
        category: "Import_Of_Steel"
    },
    {
        name: "סתם בית בשכונה",
        category: "Private_Construction"
    },

]

export default function Projects() {

    const router = useRouter()
    const [category, setCategory] = useState(projects_Category[0])

    useEffect(() => {
        let data = router.query.title;
        // console.log(data);
        if (data !== undefined)
            setCategory(projects_Category.filter((item) => data === item.key)[0])
    }, [])


    const Progects_Cards_Layout = () => {
        return (
            <>
            </>
        )
    }

    // console.log("category: " + category.key);

    let progects_Cards_Layout = category === projects_Category[0] ? 
    projects_Data.map((item, index) => <Progects_Cards key={index} data={item} />):
    projects_Data.map((item, index) => <Progects_Cards key={index} data={item} />
    )    

    // let progects_Cards_Layout = projects_Data.map((item, index) =>
    //     category === projects_Category[0] ? <Progects_Cards key={index} data={item} />
    //     : 
    // )


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
                    {progects_Cards_Layout}
                </div>
                
            </div>
        </>
    )
}




