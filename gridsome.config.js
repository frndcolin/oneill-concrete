const path = require('path')

function addStyleResource(rule) {
  rule.use(['style-resource', 'css-loader', 'stylus-loader'])
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/global/*.styl')
      ]
    })
}

module.exports = {
  siteName: "O'Neill Concrete Inc.",
  siteDescription: "O'Neill Concrete Incorporated",
  siteUrl: '127.0.0.0',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/**/*.md',
        typeName: 'Content',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-10'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    },
    {
      use: 'gridsome-plugin-pug',
      options: {
        pug: {},
        pugLoader: {}
      }
    }
  ],
  css: {
    loaderOptions: {
      stylus: {}
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  chainWebpack: config => {
    //  allow use of global variables, fx, and mixins without importing in each component
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  }
}
