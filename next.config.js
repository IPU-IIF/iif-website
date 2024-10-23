module.exports = {
  webpack: (config) => {
    config.cache = false; // Disabling Webpack cache
    return config;
  },
};