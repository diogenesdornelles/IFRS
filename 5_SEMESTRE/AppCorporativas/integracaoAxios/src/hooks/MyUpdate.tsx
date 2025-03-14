import { useEffect } from 'react';
import axios from 'axios';
function MyUpdate() {
    useEffect(() => {
        const updateUser = async () => {
            const user = {
                first_name: 'morpheus',
                job_title: 'zion resident',
            };
            try {
                const response = await
                    axios.patch('https://reqres.in/api/users/2', user);
                console.log('Usuário atualizado:', response.data);
            } catch (error) {
                console.error('Erro ao atualizar usuário:', error);
            }
        };
        updateUser();
    }, []);
    return <p>Teste de PATCH com API Axios</p>;
}
export default MyUpdate;