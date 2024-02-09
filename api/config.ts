import path from 'path';

const rootPath = __dirname;

const config = {
  rootPath,
  publicPath: path.join(rootPath),
  mongoose: {
    db: 'mongodb://localhost/links',
  }
};

export default config;