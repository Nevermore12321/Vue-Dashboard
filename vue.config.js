/**
 * @author: Shaohe Guo
 * @contact: 842125706@qq.com
 * @site: www.guoshaohe.com
 * @date: 2021/12/15 21:35
 * @file：vue.config.js
 * @update: 2021/12/15 21:35
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
const vueConfig = {
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));

    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-icon-loader")
      .loader("vue-svg-icon-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]",
      });
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // less vars，customize ant design theme

            // 'primary-color': '#F5220D',
            // 'link-color': '#F5220D',
            "border-radius-base": "0px",
          },
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    // development server port 8000
    port: 5555,
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      "/api": {
        target: "https://www.baidu.com",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};

module.exports = vueConfig;
