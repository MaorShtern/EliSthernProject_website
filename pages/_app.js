import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"

export default function MyApp({Component, pageProps}){

    if(Component.getLayout){
        return Component.getLayout(<Component {...pageProps}/>)
    }

    return (
    < >
        <Navbar/>
            <Component {...pageProps}/>
        
        {/* //  יש לסדר את הפוטר כך שיתאים לגודל המסך וגם להוריד את הערה!!!!!! */}
        <Footer />
    </>
    )
}
