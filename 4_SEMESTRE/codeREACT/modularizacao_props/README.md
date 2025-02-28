# Neste projeto

## &TIP&APP

Mostrar itens de repositório

## &TIP&TIPAGEM

Tipagem correta para passagem de props

```ts

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
```
