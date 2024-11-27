import axios from 'axios';
function MyAll() {
    // executa requisições simultâneas
    axios.all([
        axios.get('https://reqres.in/api/users/1'),
        axios.get('https://reqres.in/api/users/2')
    ])
        .then(responseArr => {
            //isso será executado apenas quando
            //todas as requisições forem concluídas
            console.log(responseArr[0].data.data);
            console.log(responseArr[1].data.data);
        });
    return (
        <p>Teste de ALL com API Axios</p>
    );
}
export default MyAll;
