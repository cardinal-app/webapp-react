import styles from './Container.module.scss'

// @ts-ignore
export const Container = (props) => {
    return (
        <section className={styles.containerSection}>
            <div className={styles.row}>
                <div className={styles.column}>
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default Container;
