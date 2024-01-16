"use client"
import styles from "./Error.module.scss";

// @ts-ignore
export default function Error({error}) {
    return (
        <section id={styles.errorSection}>
            <h1>Error occured!</h1>
            <p>Failed to fetch data</p>
        </section>
    )
}
