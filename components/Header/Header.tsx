import { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../assets/svg/musicbox.svg'
import styles from './Header.module.scss'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)


    const toggleNavbar =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <header className='flex justify-around items-center bg-black h-16 absolute top-0 left-0 w-screen z-12 text-white font-bold'>
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
                        <a href="#" className='inline-block px-16 py-2 border-2 border-white rounded-full'>Log in</a>
                        </Link>
                    </li>
                    <li >
                    <Link href="/signup">
                        <a href="" className='inline-block px-16 py-2 bg-white text-black rounded-full'>Sign up</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="app__navbar-mobile">
                <button className='w-30 h-30 rounded-full border-none outline-none' onClick={toggleNavbar}>
                    <HiMenuAlt4/>
                </button>
                {isOpen&&(
                    <nav className='absolute bg-white gap-8 right-0 top-0 h-screen w-10/12 text-black z-5'>
                        <button className='outline-none border-none w-35 h-35 rounded-full bg-none' onClick={toggleNavbar}><HiX/></button>
                        <ul className='flex-col items-center justify-center gap-16'>
                            <li>
                                <Link href="#" >Download</Link>

                            </li>
                            <li>
                            <Link href="#">Help</Link>
                            </li>
                            <li >
                                <a href="#" className='inline-block px-16 py-2 border-2 border-white'>Log in</a>
                            </li>
                            <li >
                                <a href="#" className='inline-block px-16 py-2 border-2'>Sign up</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>

        </header>
    )
}
