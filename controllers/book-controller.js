const BookModel = require("../models/book");

exports.getAllBooks = async (req, res) => {
  const books = await BookModel.find();

  if (!books.length || books.length == 0) {
    return res.status(400).json({
      success: false,
      message: "No book found in the system",
    });
  }

  res.status(200).json({
    success: true,
    data: books,
  });
};

/**
 * Create a book
 */
exports.createBook = async (req, res) => {
  const data = req.body;

  await BookModel.create(data);
};
