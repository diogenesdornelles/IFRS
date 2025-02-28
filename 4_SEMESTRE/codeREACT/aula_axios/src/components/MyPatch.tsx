import axios from 'axios';
function MyPatch() {
    // Cria os dados para serem enviados
    const user = {
        first_name: 'morpheus',
        job_title: 'zion resident'
    };
    axios.patch('https://reqres.in/api/users/2', user)
        .then(res => console.log(res));
    return (
        <p>Teste de PATCH com API Axios</p>
    );
}
export default MyPatch;
