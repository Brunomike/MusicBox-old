import Image from 'next/image'
import Link from 'next/link'

import Facebook from '../../assets/svg/facebook.svg'
import Twitter from '../../assets/svg/twitter.svg'
import Instagram from '../../assets/svg/instagram.svg'
import MusicBox from '../../assets/svg/musicbox.svg'

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['section__one']}>
                <div className={styles['logo']}><Image src={MusicBox} alt='MusicBox' width={132.68} height={60} /></div>
                <div className={styles['resource__links']}>
                    <div className='w-1/2 '>
                        <h2>MUSICBOX</h2>
                        <ul >
                            <li><Link href="#">About</Link></li>
                            <li><Link href="#">Premium</Link></li>
                            <li><Link href="#">Features</Link></li>
                        </ul>
                    </div>
                    <div className='w-1/2'>
                        <h2>COMMUNITIES</h2>
                        <ul >
                            <li><Link href="#">For Artists</Link></li>
                            <li><Link href="#">Developers</Link></li>
                            <li><Link href="#">Press</Link></li>
                        </ul>
                    </div>
                    <div className='w-1/2'>
                        <h2>USEFUL LINKS</h2>
                        <ul>
                            <li><Link href="#">Help</Link></li>
                            <li><Link href="#">Web Player</Link></li>
                            <li><Link href="#">Explore Channels</Link></li>
                            <li><Link href="#">Download App</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles['socials__links']}>
                    <div>
                        <div>
                            <Link href={""}><Image src={Facebook} alt='Facebook' width={14} height={14} /></Link>
                        </div>
                        <div>
                            <Link href={""} ><Image src={Twitter} alt='Facebook' width={14} height={14} /></Link>
                        </div>
                        <div>
                            <Link href={""} ><Image src={Instagram} alt='Facebook' width={14} height={14} /></Link>
                        </div>

                    </div>
                    <select name="" id="" defaultValue={"us"} >
                        <option value="us">English (us)</option>
                        <option value="us">English (uk)</option>
                    </select>
                </div>
            </div>
            <div className={styles['section__two']}>
                <div>
                    <ul >
                        <li ><a href="">Legal</a></li>
                        <li ><a href="">Privacy</a></li>
                        <li ><a href="">Cookies</a></li>
                        <li ><a href="">Ads</a></li>
                    </ul>
                </div>
                <div>
                    <span >&copy;{new Date().getFullYear()} MusicBox</span>
                </div>
            </div>
        </ footer>
    )
}

export default Footer