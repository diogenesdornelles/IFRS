interface ButtonProp {
  text: string;
}

const Button: React.FC<ButtonProp> = ({ text }): JSX.Element => {
  return (
    <button>{text}</button>
  );
};

export default Button