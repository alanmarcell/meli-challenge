import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://melichallenge.herokuapp.com',
});

const searchDatasource = (search) => instance.get(`/api/items?q=${search}`);
const itemDetailsDatasource = (id) => instance.get(`/api/items/${id}`);

export {
  searchDatasource,
  itemDetailsDatasource,
};
