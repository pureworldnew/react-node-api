const http = require("http");
const app = require("./app");
const { port } = require("./config/config_env");
const server = http.createServer(app);

// server listening

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
