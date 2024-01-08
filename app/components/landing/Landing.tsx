import React from 'react';
import styles from './Landing.module.css';

const Landing = () => {
    return (
        <section id={styles.landingSection}>
            <div id={styles.backgroundImage} className={styles.overlay}></div>
            <div id={styles.orangeOverlay} className={styles.overlay}></div>
            <div id={styles.yellowOverlay} className={styles.overlay}></div>
            <div id={styles.darkOverlay1} className={styles.overlay}></div>
            <div id={styles.darkOverlay2} className={styles.overlay}></div>
        </section>
    )
}

export default Landing;
