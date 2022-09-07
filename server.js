const PORT = process.env.PORT || 5000;

start();

const server = require("./src/app")({
  logger: {
    level: "info",
    // prettyPrint: true
  },
});

const start = async () => {
  try {
    await server.listen(PORT);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
