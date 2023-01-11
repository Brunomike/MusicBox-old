import { NextPage } from 'next';
import { Head } from 'next/document';
import Header from '../components/Header/Header';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Musicbox</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header isLoggedIn={true} />

            
        </div>
    )
}

export default Home;