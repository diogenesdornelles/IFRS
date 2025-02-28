interface AsideItem {
    text: string;
}

interface AsideProps {
    items: AsideItem[];
}


const Sidebar: React.FC<AsideProps> = ({ items }): JSX.Element => {
    return (
        <aside>
            <h3>Artigos recomendados</h3>
            {items.map((item, index) => (
                <p key={index}>
                    {item.text}
                </p>
            ))}
        </aside>
    )
}

export default Sidebar