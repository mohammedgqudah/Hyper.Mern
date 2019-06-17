const chalk = require("chalk");

module.exports = io => {
  io.on("connection", function(socket) {
    console.log(chalk.green(`new socket connection: ${socket.id}`));
    socket.on("disconnect", () => {
      console.log(chalk.green(`socket ${socket.id} disconnected`));
    });
  });
};
