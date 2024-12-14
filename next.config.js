module.exports = {
  env: {
    PUBLIC_URL: ""
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.extensions.push('.cjs', '.mjs');
    }

    return config;
  },
};
