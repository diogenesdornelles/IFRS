interface NewItem {
    text: string;
}

interface NewsProps {
    items: NewItem[];
}


const News: React.FC<NewsProps> = ({ items }): JSX.Element => {
    return (
        <>
            <h3>Últimas notícias</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default News