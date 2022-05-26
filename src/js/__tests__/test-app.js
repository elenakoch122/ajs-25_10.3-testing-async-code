import GameSavingLoader from '../GameSavingLoader';

jest.setTimeout(20000);
jest.mock('../reader');
beforeEach(() => jest.resetAllMocks());

test('load method in GameSavingLoader class must return an object', () => {
  const expected = {
    id: 5000,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  return GameSavingLoader.load().then((result) => expect(result).toEqual(expected));
});

test('load method in GameSavingLoader class error', () => {
  GameSavingLoader.load().catch((error) => expect(error).toThrow());
});
