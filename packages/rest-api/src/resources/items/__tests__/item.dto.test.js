import { itemDto } from '../items.dto';
import rawItemMock from './item.mock';
import rawItemDescriptionMock from './itemDescription.mock';

describe('Item DTO', () => {
  it('should have correct format', () => {
    expect(itemDto(rawItemMock, rawItemDescriptionMock)).toMatchSnapshot();
  });
});
