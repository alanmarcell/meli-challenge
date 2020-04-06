import * as R from 'ramda';

const getCategories = (itemsRaw) => R.map((value) => value.name,
  R.prop('values',
    R.find((availableFilter) => availableFilter.id === 'category',
      R.prop('available_filters', itemsRaw))));

const itemsDto = (itemsRaw) => {
  const categories = getCategories(itemsRaw);

  const items = R.map((result) => {
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
  }, R.prop('results', itemsRaw));

  return {
    author: {
      name: 'Alan',
      lastname: 'Marcell',
    },
    categories,
    items,
  };
};

export { itemsDto };
