import styles from '../styles/Menu.module.css'

export default function Menu() {
    return (

            <nav className={styles.container}>
                <ul className={styles.lista}>
                    <li className={styles.item}><a className={styles.link} href="#home">Home</a></li>
                    <li className={styles.item}><a className={styles.link} href="#news">Notícias</a></li>
                    <li className={styles.item}><a className={styles.link} href="#contact">Contato</a></li>
                    <li className={styles.item}><a className={styles.link} href="#about">Sobre</a></li>
                </ul>
            </nav>
    )
}