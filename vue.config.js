module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 8000,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
