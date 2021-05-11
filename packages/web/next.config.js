const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  lessVarsFilePath: './assets/styles/variables.less',

  webpack(config) {
    return config
  },
})
