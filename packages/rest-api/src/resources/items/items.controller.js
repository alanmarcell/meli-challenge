import { itemsDto, itemDto } from './items.dto';
import { getItemsService, getItemService, getItemDescriptionService } from './items.datasource';

const errorHandler = (res, error) => res.status(500).json({ message: error.message });

const getItems = async (req, res, _next) => {
  try {
    const response = await getItemsService(req.query.q);
    res.json(itemsDto(response.data));
  } catch (error) {
    errorHandler(res, error);
  }
};

const getItem = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const itemResponse = await getItemService(id);
    const itemDescriptionResponse = await getItemDescriptionService(id);
    res.json(itemDto(itemResponse.data, itemDescriptionResponse.data));
  } catch (error) {
    errorHandler(res, error);
  }
};

export { getItems, getItem };
