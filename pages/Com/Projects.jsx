import React from 'react'


export default function Projects({ data }) {


    // console.log(data);


    return (
        <div>Projects</div>
    )
}


export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/Fetch_Projects_Data')
    const data = await res.json()
    return {
        props: { data },
    }
}