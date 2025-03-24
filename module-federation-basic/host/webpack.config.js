const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: "./src/bootstrap.js",
  mode: "development",
  devServer: {
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        remoteApp: "remote@http://localhost:3001/remoteEntry.js"
      }
    })
  ]
};
