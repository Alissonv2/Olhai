import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/deputados'
});

export default Api;