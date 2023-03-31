import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import React, { useEffect, useState } from 'react'
import AppContext from "../AppContext"
import '../styles/styles.css'
import Head from 'next/head';


export default function MyApp({Component, pageProps}){


    const [size, setTemp] = useState({
        width: undefined,
        minWidth: 900,
        isSmall: false,
    })

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




    if(Component.getLayout){
        return Component.getLayout(
            <AppContext.Provider value={size}>
                <Head>
                    <link rel="shortcut icon" href="/logo.ico" />
                </Head>  
                <Navbar />
                <Component {...pageProps}/>
            </AppContext.Provider>
        )
    }

    return (
    < >
        <AppContext.Provider value={size}>   
        <Head>
        <link rel="shortcut icon" href="/logo.ico" />
      </Head>   
            <Navbar  />
                <Component {...pageProps } />
            <Footer />
        </AppContext.Provider>
    </>
    )
}
