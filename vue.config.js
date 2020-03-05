module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "." : "/",
  devServer: {
    host: "0.0.0.0",
    port: 8000,
    proxy: {
      "/api": {
        target: "http://106.14.200.71:4000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
