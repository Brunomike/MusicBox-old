import type { NextPage } from 'next'
import { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { FcGoogle } from 'react-icons/fc'
import { ImFacebook } from 'react-icons/im'
import FormGroup from '@mui/material/FormGroup';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'

import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Header from '../components/Header/Header'
import { ChangeEvent } from 'react';


var clientId = "me"

const SignUp: NextPage = () => {
    const [gender, setGender] = useState("");
    

    const handleGenderChange = (e: ChangeEvent) => {

    };

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

    return (
        <div>
            <Head>
                <title>Sign Up</title>
                <meta name="google-signin-client_id" content={`${process.env.GOOGLE_AUTH_CLIENT_ID}`} />
            </Head>

            <section className='app__flex section main_background center '>
                <Header />
                <div className="blur z-0"></div>
                <div className='card-form z-10 flex flex-col gap-2 relative w-6/12 mx-auto mt-28'>
                    <h2 className='text-center bold font-bold'>Ready to sign up?</h2>
                    <div className="flex justify-center items-center gap-4 mb-3" onClick={signUpWithGoogle}>
                        <button className="w-44 h-9 justify-center items-center gap-3 bg-blue_fb text-white  rounded-3xl cursor-pointer">
                            <ImFacebook className='inline-flex' />
                            <span className='inline-flex'>Facebook</span>
                        </button>

                        <button className="w-44 h-9 flex justify-center items-center gap-3 cursor-pointer border-2 border-black rounded-3xl" onClick={signUpWithGoogle}>
                            <FcGoogle className='inline-flex' />
                            <span className='inline-flex'>Google</span>
                        </button>
                    </div>

                    <form action="" className='w-4/5 mx-auto z-10 flex flex-col gap-2'>
                        <TextField id="outlined-basic" label="Email Address" variant="outlined" name='email' onChange={handleChange} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" name='password' />
                        <TextField id="outlined-basic" label="Username" variant="outlined" value='username' />
                        <div className="flex justify-center items-center gap-6">
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
                    </form>
                </div>
            </section>
        </div>
    )
}

export default SignUp