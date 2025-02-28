# Neste projeto

## &TIP&APP

- Criar um toggle darkmode
- Apresentar styled components
- Apresentar CSS Modules

## &TIP&TIPAGEM

```ts
interface Theme {
  background: string;
  color: string;
}

interface ContainerProps {
  theme: Theme;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// css modules
const styleDiv1: CSSProperties = {
    backgroundColor: 'blue',
    padding: 10
  }
```

## &TIP&HOOKS

- useState
