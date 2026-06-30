const express = require("express");
// const { users } = require("../data/users.json");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../controllers/user-controller");

// const { BookModel, UserModel } = require("../models/index");

const router = express.Router();

/**
 * Route: /users
 * Method: GET
 * Description: Get the list of all users in the system
 * Access: Public
 * Parameters: None
 */
router.get("/", getAllUsers);

/**
 * Route: /users/:id
 * Method: GET
 * Description: Get the details of the user by id
 * Access: Public
 * Parameters: id
 */
router.get("/:id", getUserById);

/**
 * Route: /users
 * Method: POST
 * Description: Create a new user
 * Access: Public
 * Parameters: None
 */
// router.post("/", (req, res) => {
//   const { id, name, email, role, borrowedBooks } = req.body;

//   if (!id || !name || !role) {
//     return res.status(400).json({
//       success: false,
//       message: "Please provide all details",
//     });
//   }

//   const user = users.find((each) => each.id === id);
//   if (user) {
//     return res.status(409).json({
//       success: false,
//       message: `User already exists for id: ${id}`,
//     });
//   }

//   users.push({
//     id,
//     name,
//     email,
//     role,
//     borrowedBooks,
//   });

//   res.status(201).json({
//     success: true,
//     message: "User added successfully!",
//   });
// });

router.post("/", createUser);

/**
 * Route: /users/:id
 * Method: PUT
 * Description: Update a user
 * Access: Public
 * Parameters: id
 */
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;

//   // check if user exists
//   const user = users.find((each) => each.id === id);
//   if (!user) {
//     return res.status(400).json({
//       success: false,
//       message: `User not found for id: ${id}`,
//     });
//   }

//   const updatedUser = users.map((each) => {
//     if (each.id === id) {
//       return { ...each, ...data };
//     }
//     return each;
//   });

//   res.send(200).json({
//     success: true,
//     message: "User updated successfully!",
//   });
// });

router.put("/:id", updateUserById);

/**
 * Route: /users/:id
 * Method: DELETE
 * Description: Delete a user
 * Access: Public
 * Parameters: id
 */
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = user.find((each) => each.id === id);

//   if (!user) {
//     return res.send(400).json({
//       success: false,
//       message: `User not found for id: ${id}`,
//     });
//   }

//   // Delete user from array
// });
router.delete("/:id", deleteUserById);

module.exports = router;
