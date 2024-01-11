import Link from "next/link";
import styles from './SideBar.module.scss';

const SideBar = () => {
    return (
        <>
            <nav>
                <div className={styles.navItem}>
                    <Link href="/home">
                        <p>Home</p>
                    </Link>
                </div>
                <div className={styles.navItem}>
                    <Link href="/fit-track">
                        <p>Fit Track</p>
                    </Link>
                </div>
            </nav>
            <div className={styles.user}>
                <img id="avatar" src="/assets/avatar.png"></img>
            </div>
        </>
    )
}

export default SideBar;
