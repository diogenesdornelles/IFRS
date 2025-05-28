import axios from 'axios';
const api = axios.create({
    //Informe a porta do serviço de autenticação
    baseURL: 'http://localhost:3333',
});
export default api;