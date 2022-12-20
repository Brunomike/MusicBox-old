import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import PhoneFinder from '../assets/images/phone_finder.png'
import MusicBox from '../assets/svg/musicbox.svg'
import FlowIcon from '../assets/images/flow_icon.png'
import FindImage from '../assets/images/mask_group.png'
import OfflineImage from '../assets/images/offline.png'
import Hq from '../assets/images/hq.png'
import NoAds from '../assets/images/no_ads.png'
import UnlimitedSkips from '../assets/images/skips.png'
import Facebook from '../assets/svg/facebook.svg'
import Twitter from '../assets/svg/twitter.svg'
import Instagram from '../assets/svg/instagram.svg'

import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <div className="main_background">
      <Head>
        <title>Musicbox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://www.google.com/recaptcha/api.js"></script> */}
        <script src={`https://www.google.com/recaptcha/api.js?render=${process.env.GOOGLE_RECAPTCHA_SITE_KEY}`} defer></script>

      </Head>
      <Header />

      {/* Section One: Open the world of music */}
      <section className='w-full h-full flex flex-col justify-center items-center gap-12 mx-auto my-0 text-center bg-black/50 '>
        <div className='flex items-center w-fit'>
          <h1 className='text-4xl font-bold text-white'>Open the world of muisc. <br />It's all here.</h1>
        </div>
        <div>
          <div className='flex app_sm gap-4'>
            <a href='#free' className='rounded-full bg-gradient-to-r from-bluish_1 to-purple_1 px-4 text-1xl font-bold text-white h-9 pt-1'>MUSICBOX PREMIUM</a>
            <a href='#premium' className='border-2 border-white rounded-full px-4 text-1xl font-bold text-white h-9 pt-1'>MUSICBOX FREE</a>
          </div>
          <p className='text-white mt-4'>1-month free trial <span className='text-bluish'>$7.99</span>/month after</p>
        </div>
      </section>

      {/* Section One: FLOW*/}
      <section className='w-full h-full flex  justify-center items-center gap-12 mx-auto my-0 text-center z-1 px-32 xs:px-8 bg-slate-900 app_sm_even'>
        <div>
          <Image src={PhoneFinder} alt="Musicbox" width={360} height={400} />
        </div>
        <div className='flex-col w-1/2 gap-4 py-4  xs:gap-8 text_sm'>
          <div className='flex items-center justify-start gap-4'>
            <Image src={FlowIcon} alt="FlowIcon" />
            <h1 className='text-white'>FLOW</h1>
          </div>
          <p className='text-white text-left mt-4'>Listen to a personalized mix of tracks based on your
            listening history, or create your own mix of genres, artists
            and playlists - letting you enjoy more of the music you love.
          </p>
        </div>
      </section>

      {/* Section One: Listen anytime, anywhere */}
      <section className='w-full h-full flex md:flex-col  justify-center items-left pl-32 gap-6  bg-slate-900 listen_bg app_sm_center'>
        <h2 className='text-3xl text-white font-bold text-left'>Listen anytime, anywhere</h2>
        <p className='text-white text-left w-1/3 text_sm'>All your favorite songs and episodes are always available - even without WiFi or LTE.</p>
      </section>

      {/* Section One: Find the music you want */}
      <section className='w-full h-full flex justify-center items-center mx-auto my-0 gap-6 px-32  bg-slate-900 app_sm_even'>
        <div className='flex-col'>
          <h2 className='text-3xl text-white font-bold text-left'>Find the music you want </h2>
          <p className='text-white text-left w-1/2 mt-4 text_sm'>Search for your favorite songs using the description,
            or turn on the <span className='text-bluish'>MusicFinder</span> feature to find the song
            that is playing near you.</p>
        </div>
        <Image src={FindImage} alt="Musicbox" />
      </section>

      {/* Section One: Why go premium */}
      <section className='w-full  md:flex sm:flex-col  justify-center items-center gap-12 mx-auto my-0 text-center px-8 md:px-32 bg-slate-900 py-8'>
        <h1 className='text-3xl text-white font-bold text-center mb-4'>Why go premium?</h1>

        <div className='flex gap-8 app_sm_baseline sm:items-baseline'>
          <div className='flex-col justify-center items-center  app_flex'>
            <div className='p-4 rounded-full bg-gray-700 w-16 h-16'>
              <Image src={OfflineImage} alt="Musicbox" width={35} height={43} />
            </div>
            <div className='text-left'>
              <h4 className='text-white font-bold'>Offline mode.</h4>
              <p className='text-gray-700'>Save and listen anywhere.</p>
            </div>
          </div>
          <div className='flex-col justify-center items-center  app_flex'>
            <div className='p-4 rounded-full bg-gray-700 w-16 h-16'>
              <Image src={Hq} alt="Musicbox" width={35} height={45} />
            </div>
            <div className='text-left'>
              <h4 className='text-white font-bold'>High quality audio.</h4>
              <p className='text-gray-700'>Enjoy the full range of sound.</p>
            </div>
          </div>
          <div className='flex-col justify-center items-center  app_flex'>
            <div className='p-4 rounded-full bg-gray-700 w-16 h-16'>
              <Image src={NoAds} alt="Musicbox" width={53} height={52} />
            </div>
            <div className='text-left'>
              <h4 className='text-white font-bold'>No ads.</h4>
              <p className='text-gray-700'>Enjoy nonstop music.</p>
            </div>
          </div>
          <div className='flex-col justify-center items-center  app_flex'>
            <div className='p-4 rounded-full bg-gray-700 w-16 h-16'>
              <Image src={UnlimitedSkips} alt="Musicbox" width={35} height={35} />
            </div>
            <div className='text-left'>
              <h4 className='text-white font-bold'>Unlimited skips.</h4>
              <p className='text-gray-700'>Just tap skip.</p>
            </div>
          </div>
        </div>
        <h4 className='text-gray-700 mt-4'>Listen free or subscribe to MusicBox Premium.</h4>

        <div className='flex gap-8 app_sm mt-12'>
          <div className='flex-col justify-center items-center' id='free'>
            <div className='flex-col border-2 border-white text-left rounded-md p-8 w-64 h-64'>
              <div >
                <h4 className='text-white'>MusicBox Free</h4>
                <p className='text-white'><span className='font-bold'>$0.00</span>/month</p>
              </div>
              <div className='mt-6'>
                <p className='text-white'>✔ Online listening</p>
                <p className='text-white'>✔ Regular audio</p>
                <p className='text-white'>✔ With advertising</p>
                <p className='text-white'>✔ 30 skips per day</p>
              </div>
            </div>
            <a href="#" className='inline-block mt-6 px-4 border-2 border-white rounded-full text-white text-1xl font-bold h-9 pt-1'>GET MUSICBOX FREE</a>
          </div>

          <div className='flex-col' id='premium'>
            <div className='flex-col border-2 border-l-bluish_1 border-t-bluish_1/60 border-r-purple_1/50 border-gradient-to-r from-bluish_1 to-purple_1 text-left rounded-md p-8 w-64 h-64'>
              <div >
                <h4 className='text-white'>MusicBox Free</h4>
                <p className='text-white'><span className='font-bold text-bluish'>$7.99</span>/month</p>
                <p className='text-gray-700 text-xs'>Start with 1-month free trial*</p>
              </div>
              <div className='mt-6'>
                <p className='text-white'>✔ Offline mode</p>
                <p className='text-white'>✔ High quality audio</p>
                <p className='text-white'>✔ No ads</p>
                <p className='text-white'>✔ Unlimited skips</p>
              </div>
            </div>
            {/* <button className='mt-6 px-4 border-2 border-white rounded-full text-white font-bold'>GET MUSICBOX PREMIUM</button> */}
            <a href="#" className='inline-block mt-6 rounded-full bg-gradient-to-r from-bluish_1 to-purple_1 px-4 text-1xl font-bold text-white h-9 pt-1'>GET MUSICBOX PREMIUM</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='w-full flex-col py-4 bg-black '>
        <div className='md:flex sm:flex-col justify-around items-center  px-8'>
          <Image src={MusicBox} alt='MusicBox' />
          <div className='flex flex-grow justify-between '>
            <div className='w-1/2'>
              <h2 className='text-gray-500'>MUSICBOX</h2>
              <ul>
                <li className='text-white'><Link href="#">About</Link></li>
                <li className='text-white'><Link href="#">Premium</Link></li>
                <li className='text-white'><Link href="#">Features</Link></li>
              </ul>
            </div>
            <div className='w-1/2'>
              <h2 className='text-gray-500'>COMMUNITIES</h2>
              <ul>
                <li className='text-white '><Link href="#">For Artists</Link></li>
                <li className='text-white '><Link href="#">Developers</Link></li>
                <li className='text-white '><Link href="#">Press</Link></li>
              </ul>
            </div>
            <div className=''>
              <h2 className='text-gray-500'>USEFUL LINKS</h2>
              <ul>
                <li className='text-white'><Link href="#">Help</Link></li>
                <li className='text-white'><Link href="#">Web Player</Link></li>
                <li className='text-white'><Link href="#">Explore Channels</Link></li>
                <li className='text-white'><Link href="#">Download App</Link></li>
              </ul>
            </div>
          </div>

          <div className='flex justify-between gap-4 items-center'>
            <div className='p-4 rounded-full bg-gray-700 w-12 h-12'>
              <a href={""} ><Image src={Facebook} alt='Facebook' width={35} height={35} /></a>
            </div>
            <div className='p-4 rounded-full bg-gray-700 w-12 h-12'>
              <a href={""} ><Image src={Twitter} alt='Facebook' width={35} height={35} /></a>
            </div>
            <div className='p-4 rounded-full bg-gray-700 w-12 h-12'>
              <a href={""} ><Image src={Instagram} alt='Facebook' width={35} height={35} /></a>
            </div>

          </div>
        </div>
        <div className='flex justify-around  mt-8'>
          <div>
            <ul className='flex justify-between gap-4 items-center'>
              <li className='text-gray-700'><a href="">Legal</a></li>
              <li className='text-gray-700'><a href="">Privacy</a></li>
              <li className='text-gray-700'><a href="">Cookies</a></li>
              <li className='text-gray-700'><a href="">Ads</a></li>
            </ul>
          </div>
          <div className='flex-col gap-4'>
            <select name="" id="" defaultValue={"us"} className='block mb-2 bg-black text-white'>
              <option value="us">English (us)</option>
              <option value="us">English (uk)</option>
            </select>
            <span className='text-gray-700 '>&copy;2022 MusicBox</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home;



