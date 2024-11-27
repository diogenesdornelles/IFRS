interface MenuItem {
  link: string;
  text: string;
}

interface MenuProps {
  items: MenuItem[];
}


const Menu: React.FC<MenuProps> = ({ items }): JSX.Element => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu