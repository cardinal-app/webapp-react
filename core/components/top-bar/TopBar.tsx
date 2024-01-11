import styles from './TopBar.module.scss';

const TopBar = () => {
    return (
        <header id={styles.mainHeader}>
            <div className={styles.left}>
                <img id="badge" src="../../assets/badge.png"></img>
            </div>
            <div className={styles.right}>

            </div>
        </header>
    )
}

export default TopBar;
