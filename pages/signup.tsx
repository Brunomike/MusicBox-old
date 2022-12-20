import type { NextPage } from 'next';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import FormGroup from '@mui/material/FormGroup';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';

import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Header from '../components/Header/Header'
import { ChangeEvent } from 'react';


var clientId = "me"

const SignUp: NextPage = () => {
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
                <Header />
                <div className="blur "></div>
                <div className='card-form  flex flex-col gap-2 relative w-4/5 md:w-5/12 mx-auto mt-28 mb-20'>
                    <h1 className='text-2xl text-center bold font-bold my-2'>Ready to sign up?</h1>
                    <div className="flex justify-center flex-col sm:flex-row items-center gap-4 mb-3" onClick={signUpWithGoogle}>
                        <button className="w-4/5 sm:w-44 h-9 sm:h-11 flex justify-center items-center gap-3 bg-blue_fb text-white  rounded-3xl cursor-pointer">
                            <ImFacebook className='inline-flex' />
                            <span className='inline-flex'>Facebook</span>
                        </button>

                        <button className="w-4/5 sm:w-44 h-9 sm:h-11 flex justify-center items-center gap-3 border-2 border-black rounded-3xl cursor-pointer" onClick={signUpWithGoogle}>
                            <FcGoogle className='inline-flex' />
                            <span className='inline-flex'>Google</span>
                        </button>
                    </div>

                    <form id='signUp' className='w-4/5 mx-auto z-10 flex flex-col gap-4'>
                        <TextField id="outlined-basic" label="Email Address" variant="outlined" name='email' onChange={handleChange} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" name='password' />
                        <TextField id="outlined-basic" label="Username" variant="outlined" name='username' />
                        <div className="flex justify-center items-center gap-6">
                            <FormControl className='w-6/12'>
                                <InputLabel id="demo-simple-select-label">Date of Birth</InputLabel>
                                <input type="date" name="dob" id="" />
                            </FormControl>
                            <FormControl className='w-6/12'>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                >
                                    <MenuItem value={"male"} selected>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                    <MenuItem value={"other"}>Other</MenuItem>
                                    <MenuItem value={"prefer_not_to_say"}>Prefer not to say</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <ReCAPTCHA
                            sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY!}
                            onChange={onChange} />
                        <button className="g-recaptcha"
                            data-sitekey={process.env.GOOGLE_RECAPTCHA_SITE_KEY}
                            data-callback='onSubmit'
                            data-action='submit'>
                            Submit
                        </button>
                        <Script>
                            {/* function onSubmit(token) {
                                document.getElementById("signUp")!.submit();
                            } */}
                        </Script>
                        <p className='text-center text-sm'>
                            By clicking on "Sign up", you accept the
                            <br />
                            <span className='text-blue-500'><Link href="">Terms and Conditions of Use</Link></span>.
                        </p>

                        <button className="bg-blue-600 w-4/5 mx-auto text-white h-10 rounded-3xl">SIGN UP</button>
                        <p className='text-center text-sm'>Already have an Account? <span className='text-blue-500'><Link href="/signin">Log in</Link></span></p>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default SignUp