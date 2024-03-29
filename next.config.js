module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'global'
          }
        },
        'sass-loader'
      ]
    })

    return config
  },
  images: {
    domains: ['cdn.sanity.io', 'res.cloudinary.com']
  }
}
