import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"


export default function MyApp({Component, pageProps}){

    if(Component.getLayout){
        return Component.getLayout(<Component {...pageProps}/>)
    }

    return (
    <>
        <Navbar/>
            <Component {...pageProps}/>
        <Footer/>
    </>
    )
}
