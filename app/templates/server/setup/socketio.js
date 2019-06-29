import chalk from 'chalk';
import { LOGGER } from './logger';

export default io => {
  io.on('connection', function(socket) {
    LOGGER.info(`New socket connection: ${socket.id}`);
    socket.on('disconnect', () => {
      LOGGER.info(`Socket ${socket.id} disconnected`);
    });
  });
};
