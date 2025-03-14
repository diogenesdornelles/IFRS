import { useEffect } from 'react';
import axios from 'axios';
function MyAll() {
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responses = await axios.all([
                    axios.get('https://reqres.in/api/users/1'),
                    axios.get('https://reqres.in/api/users/2')
                ]);
                // Extraindo os dados das respostas
                const [user1, user2] = responses.map(response => response.data);
                console.log('Usuário 1:', user1);
                console.log('Usuário 2:', user2);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };
        fetchUsers();
    }, []);
    return <p>Teste de ALL com API Axios</p>;
}
export default MyAll;
