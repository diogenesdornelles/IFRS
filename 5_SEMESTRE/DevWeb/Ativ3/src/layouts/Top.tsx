import styles from '../styles/Top.module.css'

interface TopProps {
    children: React.ReactNode
}


export default function Top({children}: TopProps) {
    return <section className={styles.container}>{children}</section>
}