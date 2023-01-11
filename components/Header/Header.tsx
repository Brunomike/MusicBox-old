import { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import Link from 'next/link'

import MenuToggler from '../../assets/images/menu.png'
import Image from 'next/image'
import Logo from '../../assets/svg/musicbox.svg'
import styles from './Header.module.scss'


export default function Header({ isLoggedIn }: { isLoggedIn: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
        console.log(isOpen);

    }

    const ActiveHeader = isLoggedIn ?
        <header className='flex justify-around items-center bg-black h-16 absolute top-0 left-0 w-screen z-10 text-white font-bold header_sm'>
            <Link href="/">
                <Image src={Logo} alt="Musicbox" className="hover:cursor-pointer" width={100} height={45} />
            </Link>
            <nav className={styles.navLinks}>
                <ul className='flex items-center gap-16'>
                    <li>
                        <Link href={"#"}><a href="#">Download</a></Link>

                    </li>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li >
                        <Link href="/signin">
                            <a href="#" className='inline-block px-8 py-2 border-2 border-white rounded-full'>Log in</a>
                        </Link>
                    </li>
                    <li >
                        <Link href="/signup">
                            <a href="" className='inline-block px-8 py-2 bg-white text-black rounded-full'>Sign up</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="app__navbar-mobile">
                <button onClick={toggleNavbar}>
                    <Image src={MenuToggler} alt="Sidebar" width={22} height={18} />
                </button>
                {isOpen && (
                    <nav>
                        <button className='outline-none border-none m-4 text-lg w-35 h-35 rounded-full bg-none' onClick={toggleNavbar}><HiX /></button>
                        <ul className='w-full flex flex-col gap-5 items-center justify-center'>
                            <li className=''>
                                <Link href="#" >Download</Link>
                            </li>
                            <li>
                                <Link href="#">Help</Link>
                            </li>
                            <li >
                                <Link href="/signin">Sign In</Link>
                            </li>
                            <li >
                                <Link href="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
        :
        <header className={styles.header}>
            <Link href="/" className='logo'>
                <Image src={Logo} alt="Musicbox" width={99.51} height={45} />
            </Link>
            <nav className={styles['desktop']}>
                <ul>
                    <li>
                        <Link href={"#"}><a href="#">Download</a></Link>
                    </li>
                    <li>
                        <Link href={"#"}>Help</Link>
                    </li>                   
                    <li className={styles.signin}>
                        <Link href="/auth/signin">Log in</Link>
                    </li>
                    <li className={styles.signup}>
                        <Link href="/auth/signup">Sign up</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles['app__navbar-mobile']}>
                <button onClick={toggleNavbar}>
                    <Image src={MenuToggler} alt="Sidebar" width={22} height={18} />
                </button>
                {isOpen && (
                    <nav>
                        <button className='outline-none border-none m-4 text-lg w-35 h-35 rounded-full bg-none' onClick={toggleNavbar}><HiX /></button>
                        <ul className='w-full flex flex-col gap-5 items-center justify-center'>
                            <li className=''>
                                <Link href="#" >Download</Link>
                            </li>
                            <li>
                                <Link href="#">Help</Link>
                            </li>                           
                            <li >
                                <Link href="/signin">Sign In</Link>
                            </li>
                            <li >
                                <Link href="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>

        </header>;

    return <>{ActiveHeader}</>;
}
