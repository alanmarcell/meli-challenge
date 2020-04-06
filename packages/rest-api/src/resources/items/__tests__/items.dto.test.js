import { itemsDto } from '../items.dto';
import rawItemsMock from './items.mock';

describe('Items DTO', () => {
  it('should have correct format', () => {
    expect(itemsDto(rawItemsMock)).toMatchSnapshot();
  });
});
