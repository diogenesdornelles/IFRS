import styles from "../styles/Main.module.css"

interface MainProps {
    children: React.ReactNode
}

export default function Main({children}: MainProps) {
    return <main className={styles.container}>{children}</main>
}