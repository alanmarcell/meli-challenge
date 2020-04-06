import axios from 'axios';

const errorHandler = (res, error) => res.status(500).json({ message: error.message });


const instance = axios.create({
  baseURL: 'https://api.mercadolibre.com',
  // headers: { 'Content-Type': 'application/json' },
});

const getItemsService = query => {

  return instance.get(`/sites/MLA/search?q=${query}`)
}

const getItems = async (req, res, _next) => {
  try {
    console.log(req.query.q)
    const response = await getItemsService(req.query.q)
    // console.log(response)
    res.json(response.data);
  } catch (error) {
    errorHandler(res, error);
  }
}

export { getItems }