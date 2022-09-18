import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import PhoneFinder from '../assets/images/phone_finder.png'
import FlowIcon from '../assets/images/flow_icon.png'
import ListenAnytime from '../assets/images/listen_anytime.png'
import FindImage from '../assets/images/mask_group.png'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="main_background">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="w-full h-full overflow-y-auto">
        <section className='w-full h-full flex flex-col justify-center items-center gap-12 mx-auto my-0 text-center z-1 bg-black/50 '>
          <div className='flex items-center w-fit'>
            <h1 className='text-4xl font-bold text-white'>Open the world of muisc. <br />It's all here.</h1>
          </div>
          <div>
            <div className='flex xs:flex-col xs:gap-4 gap-2'>
              <button className='rounded-full bg-gradient-to-r from-bluish_1 to-purple_1 px-4 text-1xl font-bold text-white h-9'>MUSICBOX PREMIUM</button>
              <button className='border-2 border-white rounded-full px-4 text-1xl font-bold text-white h-9'>MUSICBOX FREE</button>
            </div>
            <p className='text-white mt-4'>1-month free trial <span className='text-bluish'>$7.99</span>/month after</p>
          </div>
        </section>

        <section className='w-full h-full md:flex xs:flex-col  justify-center items-center gap-12 mx-auto my-0 text-center z-1 px-32 xs:px-8 bg-slate-900'>
          <div>
            <Image src={PhoneFinder} alt="Musicbox"  width={360} height={400}/>
          </div>
          <div className='flex-col w-1/2 gap-4 py-4 xs:gap-8'>
            <div className='flex items-center justify-start gap-4'>
              <Image src={FlowIcon} alt="Musicbox" />
              <h1 className='text-white'>FLOW</h1>
              </div>
              <p className='text-white text-left'>Listen to a personalized mix of tracks based on your
              listening history, or create your own mix of genres, artists
              and playlists - letting you enjoy more of the music you love.
            </p>            
          </div>
        </section>



        <section className='w-full h-full md:flex xs:flex-col  justify-center items-center gap-12 mx-auto my-0 text-center z-1 bg-slate-900'>
        <Image src={ListenAnytime} alt="Musicbox"  className='w-screen h-screen z-1'/>
          <h2 className='text-white font-bold'>Listen anytime, anywhere</h2>
          <p className='text-white'>All your favorite songs and episodes are always available - even without WiFi or LTE.</p>
        </section>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home;



