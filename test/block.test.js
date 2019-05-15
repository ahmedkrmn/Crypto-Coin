const Block = require('../block');
const {GENESIS_DATA} = require('../config/data');
describe('Block', () => {
  const timestamp = Date.now();
  const lastHash = 'foo-hash';
  const hash = 'bar-hash';
  const data = {
    sender: 'John',
    receiver: 'Doe',
    amount: 12
  };
  const block = new Block({ timestamp, lastHash, hash, data });
  it('has a timestamp, lastHash, hash and data property', () => {
    expect(block.timestamp).toBeDefined();
    expect(block.lastHash).toBeDefined();
    expect(block.hash).toBeDefined();
    expect(block.data).toBeDefined();
  });
  describe('genesis()', () => {
    const genesisBlock = Block.genesis();
    it('returns a Block instance', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });
    it('contains the genesis data', () => {
      expect(genesisBlock.timestamp).toEqual(GENESIS_DATA.timestamp);
      expect(genesisBlock.lastHash).toEqual(GENESIS_DATA.lastHash);
      expect(genesisBlock.hash).toEqual(GENESIS_DATA.hash);
      expect(genesisBlock.data).toEqual(GENESIS_DATA.data);
    });
  });
});[]
