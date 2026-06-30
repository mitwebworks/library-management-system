const express = require("express");
const app = express();

const dotenv = require("dotenv");

const dbConnection = require("./dbConnection");
const { usersRouter, booksRouter } = require("./routes"); // Imported Routes

dotenv.config();

dbConnection();

app.use(express.json());

const port = 8081;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world! :-)",
  });
});

app.use("/users", usersRouter);
app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} `);
});
