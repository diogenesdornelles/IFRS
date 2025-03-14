import { useEffect } from 'react';
import axios from 'axios';
function MyPost() {
    useEffect(() => {
        const createUser = async () => {
            const user = {
                first_name: 'John',
                last_name: 'Lilly',
                job_title: 'Software Engineer',
            };
            try {
                const response = await
                    axios.post('https://reqres.in/api/users', user);
                console.log(response.data);
            } catch (error) {
                console.error('Erro ao criar usuário:', error);
            }
        };
        createUser();
    }, []);
    return <p>Teste de POST com API Axios</p>;
}
export default MyPost;