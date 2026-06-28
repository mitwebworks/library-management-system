const express = require("express");
const app = express();

const dotenv = require("dotenv");

const dbConnection = require('./dbConnection')

dotenv.config();

dbConnection();

// importing routes
const usersRouter = require("./routes/users");
// const booksRouter = require('./routes/books')

app.use(express.json());

const port = 8081;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world! :-)",
  });
});

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} `);
});
