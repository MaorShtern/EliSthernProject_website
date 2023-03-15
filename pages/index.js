import Head from 'next/head';
import HomePage from './Com/HomePage';

export default function Home() {
  return (
    <div >
      <Head>
        <title>דף הבית - אלי שטרן פרוייקטים</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
        <div >
          <HomePage/>
        </div>
      </div>
  )
}
