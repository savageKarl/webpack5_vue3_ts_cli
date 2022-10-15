module.exports = {
  presets: [
    ['@babel/preset-env', { // 配置转换语法
      useBuiltIns: 'usage', // 配置只转换在时代实际使用到的语法和填充api
      corejs: 3, // 使用版本为 3的corejs 来进行 polyfill
    }],
    ['@babel/preset-typescript', {
      allExtensions: true,        // 支持所有文件扩展名，必须配置，不然babel不会解析vue文件的ts，将导致报错
    }], // 用于解析 typescript
  ],
  // cacheDirectory: true,
}

// fork-ts-checker-webpack-plugin可以进行类型检查