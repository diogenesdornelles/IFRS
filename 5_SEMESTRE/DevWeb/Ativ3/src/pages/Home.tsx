import styles from '../styles/Home.module.css'

interface HomeProps {
    children: React.ReactNode
}


export default function Home({children}: HomeProps) {
    return (<div className={styles.container}>{children}</div>)
}