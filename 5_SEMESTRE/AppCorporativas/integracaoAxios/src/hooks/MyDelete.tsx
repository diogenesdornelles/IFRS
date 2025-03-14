import { useEffect } from 'react';
import axios from 'axios';
function MyDelete() {
    useEffect(() => {
        const deleteUser = async () => {
            try {
                const response = await
                    axios.delete('https://reqres.in/api/users/2');
                console.log('Usuário deletado com sucesso:', response.status);
            } catch (error) {
                console.error('Erro ao deletar usuário:', error);
            }
        };
        deleteUser();
    }, []);
    return <p>Teste de DELETE com API Axios</p>;
}
export default MyDelete;