import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/Cards_Styles/Progects_Cards_Styles.module.css'
import Link from 'next/link'



export default function Projects_Cards({ data }) {

    return (
        <>
        <Link className={styles.link} href={`http://localhost:3000/Com/${data.project_ID}`}>
            <div >
                {data.images.length !== 0 ?
                    <Image className={styles.Images} src={data.images[0]} alt='' priority /> 
                    : null
                }
                <p>{data.title}</p>
            </div>
            </Link>
        </>
    )
}
