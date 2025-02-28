# Neste projeto

## &TIP&APP

Esse programa react usa um custom hook para setar o titulo do documento HTML de acordo com o numero de cliques em um button. O custom  hook recebe useEffect em seu body sem array de dependencias, de modo que a variável atualiza permanentemente durante o curso da execução do programa.

Em React, um hook é uma função especial que começa com "use" e que permite acessar recursos do React (como estado ou ciclos de vida) dentro de componentes funcionais.

## &TIP&TIPAGEM

## &TIP&HOOKS

- useEffetc
- useState
- useDocumentTitle

```ts
import { useEffect } from 'react';
const useDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    });
}

export default useDocumentTitle
```
