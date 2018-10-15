import { crc16 } from './crc16';

describe('crc16', () => {
  it('crc16 from string', () => {
    expect(crc16('hello')).toEqual(0x34D2);
  });

  it('crc16 from other string', () => {
    expect(crc16('Hacktoberfest')).toEqual(0x0757);
  });
});
