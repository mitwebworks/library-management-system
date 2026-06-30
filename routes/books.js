const express = require("express");
// const { users } = require("../data/users.json");

const { BookModel, UserModel } = require("../models/index");
const { getAllBooks, createBook } = require("../controllers/book-controller");

const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Description: Get the list of all books in the system
 * Access: Public
 * Parameters: None
 */
router.get("/", getAllBooks);

/**
 * Route: /books
 * Method: POST
 * Description: Insert a book in the system
 * Access: Public
 * Parameters: None
 */
router.post("/", createBook);

module.exports = router;
