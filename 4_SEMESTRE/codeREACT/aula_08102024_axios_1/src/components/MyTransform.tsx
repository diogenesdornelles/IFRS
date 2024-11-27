import axios from 'axios';
function MyTransform() {
    const options = {
        transformResponse: [(data) => {
            // transformar a resposta
            data = "Mudei a resposta"
            return data;
        }]
    };
    axios.get('https://reqres.in/api/users', options)
        .then(res => console.log(res)); return (
            <p>Teste de Transform com API Axios</p>
        );
}
export default MyTransform;
