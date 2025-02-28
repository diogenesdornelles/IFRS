import axios from 'axios';
function MyDelete() {
    axios.delete('https://reqres.in/api/users/2')
        .then(res => console.log(res));
    return (
        <p>Teste de DELETE com API Axios</p>
    );
}
export default MyDelete;