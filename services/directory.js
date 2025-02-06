import * as dree from 'dree';

const options = {
  stat: false,
  normalize: true,
  followLinks: false,
  size: true,
  hash: false,
  depth: 5,
  sizeInBytes: false,
  hash: false,
};

export default class Directory {
  constructor(config) {
    this.config = config;
  }

  async tree() {
    let path = this.config.path;
    return new Promise((resolve, reject) => {
      dree.scanAsync(path, options).then(tree => {
        resolve(tree);
      });
    });
  }

}