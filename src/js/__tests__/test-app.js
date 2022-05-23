import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.setTimeout(20000);
jest.mock('../reader');
beforeEach(() => jest.resetAllMocks());

test('load method in GameSavingLoader class must return an object', () => {
  // expect.assertions(1);
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  const value = read();
  read.mockResolvedValue(value);
  return expect(GameSavingLoader.load()).resolves.toEqual(expected);
});

test('load method in GameSavingLoader class error', () => {
  // expect.assertions(1);
  read.mockRejectedValue(new Error());
  return expect(GameSavingLoader.load()).rejects.toThrow(new Error());
});
