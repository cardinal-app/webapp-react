import Wallet from "@/core/components/wallet/Wallet";
import styles from "./Home.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <Wallet>
            <section id={styles.heroSection}>
                <div id={styles.hero}>
                    <h1>Cardinal</h1>
                    <h2>/ˈkɑːdɪnəl/ Of the greatest importance; <br/> fundamental.</h2>
                    <div id={styles.content}>
                        <div className={styles.row}>
                            <div className={styles.item}>
                                <FontAwesomeIcon icon={faPersonRunning} className={styles.icon}/>
                                <div className={styles.itemDescription}>
                                    <p className={styles.itemHeader}>Fit Track</p>
                                    <p className={styles.itemBody}>Track completed training and progress towards goals</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
</Wallet>
)
    ;
}
