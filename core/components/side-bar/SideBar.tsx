"use client"
import Link from "next/link";
import styles from './SideBar.module.scss';
import { usePathname } from "next/navigation";
import avatar from '@/assets/avatar.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faRunning } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
    if (usePathname() == '/login') {
        return <></>
    } else {
        return (
            <>
                <nav id={styles.sideBar}>
                    <div className={styles.navItem}>
                        <Link href="/" className={styles.link}>
                            <FontAwesomeIcon icon={faHouse} className={styles.icon}/>
                            <p>Home</p>
                        </Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link href="/fit-track" className={styles.link}>
                            <FontAwesomeIcon icon={faRunning} className={styles.icon}/>
                            <p>Fit Track</p>
                        </Link>
                    </div>
                </nav>
                <div id={styles.user}>
                    <Link href="/login" className={styles.link}>
                        <img id={styles.avatar} src={avatar.src}></img>
                    </Link>
                </div>
            </>
        )
    }
}

export default SideBar;
