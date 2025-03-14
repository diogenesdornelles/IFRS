import styles from '../styles/News.module.css'
import { New } from '../assets/news/news'

interface NewsProps {
    news: New[]
}

export default function News({news}: NewsProps) {
    return (
        <section className={styles.container}>
            <div className={styles.news}>
                <h2 className={styles.title}>Últimas Notícias</h2>
                {
                    news.map((n) => (
                        <div className={styles.card} key={n.id}>
                        <h3 className={styles.subtitle}>{n.titulo}</h3>
                        <p className={styles.text} >{n.noticia}<a href={n.link}>Leia aqui</a></p>
                        </div>
                    ))

                }

            </div>
        </section>
    )
}