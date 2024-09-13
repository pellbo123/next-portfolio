import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
    return (
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <Link href='/'className={styles.nav_logo}>
                <Image src='/Logo.jpg' width={64} height={64}></Image>
                <span>portfolio</span>
                </Link>
                <div className={styles.navmenu}></div>
                <ui className={styles.navlist}>
                    <li><Link href='/'>집</Link></li>
                    <li><Link href='/projects'>프로젝트</Link></li>
                    <li><Link href='https://open.kakao.com/o/stbdHxOg'>크넥트</Link></li>
                </ui>

            </nav>
        </div>
    )
}