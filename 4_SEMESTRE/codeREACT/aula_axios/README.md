# Neste projeto

## &TIP&APP

Implementar vários tipos de requisição HTTP via axios

- all
- delete
- get
- post
- pacth
- transform
- interceptor
- com async

## &TIP&TIPAGEM

```ts
type TUser = {
  id: string;
  first_name: string;
  last_name: string;
}

type TUsers = TUser[]

function App(): JSX.Element {
  const [users, setUsers] = useState<TUsers>([])
```

## &TIP&CODE

Um componente funcional que executa uma função assíncrona para fazer uma requisição usando o Axios.

```ts
import axios from 'axios';
function MyAsyncAwait() {
    const listUsers = async () => {
        try {
            const res = await axios.get('https://reqres.in/api/users');
            console.log(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };
    listUsers();
    return (
        <p>Teste de Async/Await com API Axios</p>
    );
}
export default MyAsyncAwait;
```
