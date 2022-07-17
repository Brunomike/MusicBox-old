import type { NextPage } from 'next'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import FormGroup from '@mui/material/FormGroup';

import Head from 'next/head'
import Script from 'next/script'
import Header from '../components/header/Header'


var clientId = "me"

const SignUp: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Sign Up</title>
                <meta name="google-signin-client_id" content={`${process.env.GOOGLE_AUTH_CLIENT_ID}`} />
            </Head>

            <section className='app__flex section center '>
                <Header />
                <div className="blur"></div>
                <div className='card-form'>
                    <h2>Ready to sign up?</h2>
                    <Script
                        src="https://accounts.google.com/gsi/client"
                        async={true}
                        defer={true}
                    />
                    <div id="g_id_onload" data-client_id={process.env.GOOGLE_AUTH_CLIENT_ID} data-callback="handleCredentialResponse"></div>
                    <div className="g_id_signin" data-type="standard"></div>
                    <div id="fb-root"></div>
                    <Script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=2371160386357283&autoLogAppEvents=1" nonce="6Avafr8J" />

                    <div className="fb-login-button" data-width="200" data-size="large" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true" data-scope="public_profile,email"></div>

                    <form action="">
                            <FormGroup title={"Email address"}>
                                <input type={"text"} name={"email"}/>
                            </FormGroup>
                        <FormGroup title={"Password"}>
                                <input type={"text"} name={"email"}/>
                            </FormGroup>
                        <FormGroup title={"Username"}>
                                <input type={"text"} name={"email"}/>
                            </FormGroup>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default SignUp