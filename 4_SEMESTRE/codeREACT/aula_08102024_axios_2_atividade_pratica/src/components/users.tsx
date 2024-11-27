import { useState } from 'react';
import { useFindUsersReducer } from '../hooks/useFindUsers';


function Users() {
    //Cria um estado para o conteúdo da pesquisa
    const [search, setSearch] = useState<string | boolean>('');
    // use seu próprio hook para carregar os dados da API
    const { state } = useFindUsersReducer(search);
    // Desestruture isLoading, data e error de state
    const { data, loading, error } = state;
    return (
        <>
            <div>
                {loading ? <p>Carregando...</p> :
                    <ul>
                        {
                            data &&
                            data.length > 0 &&
                            data.map(item => (
                                //Atualiza o estado de search para o id selecionado nalista
                                < li key={item.id} onClick={() => setSearch(item.id)}>
                                    {item.username}: {item.name}
                                </li>
                            ))
                        }
                    </ul>}
                {error ? <p>{error}</p> : null}
            </div >
            <button onClick={() => setSearch(false)}>Listar todos</button>
        </>
    );
}
export default Users;