import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.mercadolibre.com',
});

const getItemsService = (query) => instance.get(`/sites/MLA/search?q=${query}`);
const getItemService = (id) => instance.get(`/items/${id}`);
const getItemDescriptionService = (id) => instance.get(`/items/${id}/description`);

export {
  instance,
  getItemsService,
  getItemService,
  getItemDescriptionService,
};
