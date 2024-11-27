import axios from 'axios';
function MyPost() {
    // Cria os dados para serem enviados
    const user = {
        first_name: 'John',
        last_name: 'Lilly',
        job_title: 'Software Engineer'
    };
    axios({
        url: 'https://reqres.in/api/users',
        method: 'POST',
        data: user
    })
        .then(res => console.log(res));
    return (
        <p>Teste de POST com API Axios</p>
    );
}
export default MyPost;
