const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("calculator:server");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.green(`Escuchando en el puerto ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Error al iniciar el servidor"));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`El puerto ${port} ya esta en uso`));
    }
  });
};

module.exports = { initializeServer };
