import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.container}>
            <h3 className={styles.title}>Artigos Recomendados</h3>
            <ul className={styles.lista}>
                <li className={styles.artigo}>Artigo 1</li>
                <li className={styles.artigo}>Artigo 2</li>
                <li className={styles.artigo}>Artigo 3</li>
            </ul>
        </aside>
    )
}