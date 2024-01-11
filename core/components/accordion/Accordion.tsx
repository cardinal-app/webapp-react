import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Accordion.module.scss';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

// @ts-ignore
export const Accordion = (props) => {
    return (
        <section className={styles.accordionSection}>
            <div className={styles.accordionHeader}>
                <h2 className={styles.expanded}>
                    <FontAwesomeIcon icon={faCaretRight} className={styles.icon}/>
                    {props.title}
                </h2>
            </div>
            <div className={styles.accordionContent}>
                {props.children}
            </div>
        </section>
    )
}

export default Accordion;
