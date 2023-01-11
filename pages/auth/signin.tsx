import type { NextPage } from 'next';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';

import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header/Header'

var clientId = "me"

const SignIn: NextPage = () => {
  const [state, setState] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  const signUpWithGoogle = () => {
    console.log(process.env.apiUrl);

    window.open(
      `${process.env.apiUrl}/auth/google/callback`,
      "_self"
    );
  }
  const signUpWithFacebook = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/facebook/callback`,
      "_self"
    );
  }

  function onChange(value: any) {
    console.log("Captcha value:", value);
  }

  return (
    <div>
      <Head>
        <title>Sign Up</title>
        <meta name="google-signin-client_id" content={`${process.env.GOOGLE_AUTH_CLIENT_ID}`} />
      </Head>

      <section className='app__flex section main_background center'>
        <Header isLoggedIn={false} />
        <div className="blur"></div>
        <div className='card-form  flex flex-col gap-2 relative w-4/5 md:w-5/12 mx-auto mt-24 mb-18'>
          <h1 className='text-2xl text-center bold font-bold my-2'>What will you listen to today?</h1>
          <div className="flex justify-center flex-col sm:flex-row items-center gap-4 mb-3" onClick={signUpWithGoogle}>
            <button className="w-4/5 sm:w-44 h-9 sm:h-11 flex justify-center items-center gap-3 bg-blue_fb text-white  rounded-3xl cursor-pointer">
              <ImFacebook className='inline-flex' />
              <span className='inline-flex'>Facebook</span>
            </button>

            <button className="w-4/5 sm:w-44 h-9 sm:h-11 flex justify-center items-center gap-3 border-2 border-black rounded-3xl cursor-pointer" onClick={signUpWithGoogle}>
              <FcGoogle className='inline-flex'  />
              <span className='inline-flex'>Google</span>
            </button>
          </div>

          <form id='signUp' className='w-4/5 mx-auto z-10 flex flex-col gap-4'>
            <TextField id="outlined-basic" label="Email Address" variant="outlined" name='email' onChange={handleChange} type="email" />
            <TextField id="outlined-basic" label="Password" variant="outlined" name='password' type="password" />
            <div className="w-full flex flex-col gap-3 md:flex-row md:gap-0 justify-between items-center">
              <div className='flex '>
                <input type="checkbox" name="remember" id="remember" className='w-4 mr-1' />
                <label htmlFor="remember" className='text-sm'>Remember me</label>
              </div>
              <button className="bg-blue-600 w-40  text-white h-10 rounded-3xl font-semibold">LOG IN</button>
            </div>
            <p className='text-center text-sm text-blue-500'>
              <Link href="/forgot-password">Forgot your password?</Link>
            </p>
            <p className='text-center'>Don't hava an acccount?</p>
            <span className="bg-white w-full md:w-4/5 mx-auto text-black text-center text-md h-10 border-2 border-black rounded-3xl font-semibold">
              <Link href="/signup" >SIGN UP FOR MUSICBOX</Link>
            </span>
          </form>
        </div>
      </section>
    </div>
  )
}

export default SignIn