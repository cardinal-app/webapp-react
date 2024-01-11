import styles from './Menu.module.scss';

// @ts-ignore
export const Menu = (props) => {
    return (
        <section id={styles.menuSection}>
            <h1>{props.children}</h1>
        </section>
    )
}

export default Menu;
