import mongoose from "mongoose";
import chalk from "chalk";

// Require our models -- this will register the models into mongoose
// so the rest of the application can simply call mongoose.model('User')
// anywhere the User model needs to be used.
import "./models";

console.log(chalk.yellow("Opening connection to MongoDB . . ."));

mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true, useCreateIndex: true })
  .catch(e => {
    console.log(chalk.red(e.message));
  });

const db = mongoose.connection;

db.on("open", function(ref) {
  console.log("MongoDB connection opened!");
});
const startDbPromise = new Promise(function(resolve, reject) {
  db.on("open", resolve);
});

export default startDbPromise;
