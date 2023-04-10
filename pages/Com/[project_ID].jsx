import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


export default function project({ project }) {


  // console.log(project.images);

  return (
    <div style={{ margin: 10}}>
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <h1>{project.title}</h1>
        <p></p>
      </div>


      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width:'70%'}}>
          <Carousel  showThumbs={false}>
            {
              project.images.map((image, index) => (
                <div key={index}>
                  <Image style={{ width: '100%', height: 600 }} src={image} alt='' />
                </div>
              ))
            }
          </Carousel>
        </div>
        <div style={{width:'30%', backgroundColor:'red'}}>
          text
        </div>
      </div>


    </div>
  )
}



export async function getStaticPaths() {
  let res = await fetch('http://localhost:3000/api/Api_Projects_Data', { method: "GET" })
  let data = await res.json()

  let pathsData = data.map((project) => {
    return { params: { project_ID: JSON.stringify(project.project_ID) } }
  })

  return {
    paths: pathsData,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  let { params } = context
  let project_ID = parseInt(params.project_ID)

  let res = await fetch('http://localhost:3000/api/Api_Projects_Data',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ project_ID: project_ID })
    })

  let data = await res.json()
  return {
    props: { project: data },
  }

}



