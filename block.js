const { GENESIS_DATA } = require('./config/data');
class Block {
  constructor({ timestamp, hash, lastHash, data }) {
    this.timestamp = timestamp;
    this.hash = hash;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
  static genesis() {
    return new this(GENESIS_DATA);
  }
}

module.exports = Block;
