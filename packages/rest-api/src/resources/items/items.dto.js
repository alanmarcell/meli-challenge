import * as R from 'ramda';

const author = {
  name: 'Alan',
  lastname: 'Marcell',
};

const getCategories = (itemsRaw) => R.map((value) => value.name,
  R.propOr([], 'values',
    R.find((availableFilter) => availableFilter.id === 'category',
      R.prop('available_filters', itemsRaw))));

const getItem = (result) => {
  const amount = R.split('.', result.price.toString());

  return {
    id: result.id,
    title: result.title,
    price: {
      currency: result.currency_id,
      amount: Number(amount[0]),
      decimals: amount[1] ? Number(amount[1]) : 0,
    },
    picture: result.thumbnail,
    condition: result.condition,
    free_shipping: result.shipping.free_shipping,
  };
};

const getItems = itemsRaw => R.map((result) => getItem(result), R.prop('results', itemsRaw));

const itemsDto = (itemsRaw) => {
  const categories = getCategories(itemsRaw);
  const items = getItems(itemsRaw);

  return {
    author,
    categories,
    items,
  };
};

const itemDto = (itemRaw, itemDescriptionRaw) => {
  const item = R.merge(getItem(itemRaw), {
    sold_quantity: itemRaw.sold_quantity,
    description: itemDescriptionRaw.plain_text,
  });
  return {
    author,
    item,
  };
};

export { itemsDto, itemDto };
