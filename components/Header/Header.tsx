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
        <header className={styles.header}>
            <Image src={Logo} alt="Musicbox" className={styles.logo} width={100} height={45} />
            <nav className={styles.navLinks}>
                <ul>
                    <li>
                        <Link href={"#"}><a href="#">Download</a></Link>
                        
                    </li>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li >
                        <a href="#" className={`${styles.btn} ${styles.login}`}>Log in</a>
                    </li>
                    <li >
                        <a href="#" className={`${styles.btn} ${styles.signup}`}>Sign up</a>
                    </li>
                </ul>
            </nav>
            <div className="app__navbar-mobile">
                <button className={styles.toggleClosed} onClick={toggleNavbar}>
                    <HiMenuAlt4/>
                </button>
                {isOpen&&(
                    <nav className={styles.navLinksMobile}>
                        <button className={styles.toggleOpen} onClick={toggleNavbar}><HiX/></button>
                        <ul>
                            <li>
                                <Link href="#"><a href="#">Download</a></Link>

                            </li>
                            <li>
                                <a href="#">Help</a>
                            </li>
                            <li >
                                <a href="#" className={`${styles.btn} ${styles.login}`}>Log in</a>
                            </li>
                            <li >
                                <a href="#" className={`${styles.btn} ${styles.signup}`}>Sign up</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>

        </header>
    )
}
