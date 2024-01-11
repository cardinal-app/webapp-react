"use client"
import { usePathname } from 'next/navigation';
import styles from './TopBar.module.scss';
import badge from '@/assets/badge.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell, faCog, faQuestion, faSearch } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
    if (usePathname() == '/login') {
        return <></>
    } else {
        return (
            <header id={styles.mainHeader}>
                <div className={styles.left}>
                    <img id={styles.badge} src={badge.src}></img>
                </div>
                <div className={styles.right}>
                    <FontAwesomeIcon icon={faSearch} className={styles.icon}/>
                    <FontAwesomeIcon icon={faBell} className={styles.icon}/>
                    <FontAwesomeIcon icon={faQuestion} className={styles.icon}/>
                    <FontAwesomeIcon icon={faCog} className={styles.icon}/>
                </div>
            </header>
        )
    }
}

export default TopBar;
