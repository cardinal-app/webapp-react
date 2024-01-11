import Container from "@/core/components/container/Container";
import styles from './Admin.module.scss';

export default function FitTrackAdmin() {
    return (
        <section>
            <header id={styles.fitTrackHeader}>
                <p>Import</p>
                <p>Export</p>
                <p>Add Week</p>
            </header>
            <Container>
                <p>B14:W4</p>
            </Container>
        </section>
)
}
