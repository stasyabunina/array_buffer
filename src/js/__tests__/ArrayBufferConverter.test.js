import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('testing load method', () => {
  const bufferConverter = new ArrayBufferConverter();
  const buffer = getBuffer();
  bufferConverter.load(buffer);
  expect(bufferConverter.buffer).toEqual(getBuffer());
});

test('testing toString method', () => {
  const bufferConverter = new ArrayBufferConverter();
  const buffer = getBuffer();
  bufferConverter.load(buffer);
  expect(bufferConverter.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
