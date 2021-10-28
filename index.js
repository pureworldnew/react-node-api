const http = require("http");
const app = require("./app");
const { port } = require("./config/config_env");
const server = http.createServer(app);

// server listening

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("pid is" + process.pid);
});

process.on("uncaughtException", (err) => {
  console.error(err, "Uncaught Exception thrown");
  process.exit(1);
});

process.on("SIGTERM", () => {
  server.close(function () {
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  server.close(function () {
    process.exit(0);
  });
});
