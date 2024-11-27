import axios from 'axios';
function MyInterceptor() {
    // Adicionar um interceptador de requisição
    axios.interceptors.request.use(config => {
        // executa uma tarefa antes que a requisição seja enviada
        console.log('Request was sent');
        return config;
    }, error => {
        // tratamento de erros
        return Promise.reject(error);
    });
    // Adicione um interceptor de resposta
    axios.interceptors.response.use((response) => {
        // Faça algo com os dados de resposta
        console.log('Response was received');
        return response;
    }, (error) => {
        // Faça algo com erro vindo da resposta
        return Promise.reject(error);
    });
    // envie uma requisição GET
    axios.get('https://reqres.in/api/users')
        .then(response => {
            // mostrar os dados de resposta
            console.log(response.data.data);
        })
        .catch(err => {
            // manipular erros
            console.log(err);
        });
    return (
        <p>Teste com Interceptor no Axios</p>
    );
}
export default MyInterceptor;