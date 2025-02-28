interface ICartItemProps {
    item: {
      name: string;
      quantity: number;
    };
    removeItem: (name: string) => void;
  }
  
  function CartItem({ item, removeItem }: ICartItemProps): JSX.Element {
    return (
      <li>
        {item.name} (Quantidade: {item.quantity}){" "}
        <button onClick={() => removeItem(item.name)}>Remover</button>
      </li>
    );
  }
  
  export default CartItem;