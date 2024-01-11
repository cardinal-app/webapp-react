import styles from './Wallet.module.scss'

// @ts-ignore
const Wallet = (props) => {
    return (
        <section id={styles.walletSection}>
            <div id={styles.backgroundImage}></div>
            <div id={styles.walletItem}>
                {props.children}
            </div>
        </section>
    )
}

export default Wallet;
