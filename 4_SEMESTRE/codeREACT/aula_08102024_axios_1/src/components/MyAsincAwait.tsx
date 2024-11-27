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
