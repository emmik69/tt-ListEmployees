import axios from 'axios';

const $host = axios.create({
  baseURL: 'https://frontend-test-api.stk8s.66bit.ru/',
});

export { $host };
