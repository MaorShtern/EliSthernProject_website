import Head from 'next/head';
import HomePage from './Com/HomePage';
import {images} from '../images'

export default function Home() {

  // console.log(size);

  return (
    <div >
      {/* <Head>
        <title>דף הבית - אלי שטרן פרוייקטים</title>
        <link rel="shortcut icon" href="/logo.ico" />
      </Head> */}
        <div >
          <HomePage />
        </div>
      </div>
  )
}
