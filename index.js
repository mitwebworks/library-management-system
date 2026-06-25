const express = require("express");
const app = express();

const { users } = require("./data/users.json");

app.use(express.json());

const port = 8081;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world! :-)",
  });
});

/**
 * Route: /users
 * Method: GET
 * Description: Get the list of all users in the system
 * Access: Public
 * Parameters: None
 */
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
  });
});

/**
 * Route: /users/:id
 * Method: GET
 * Description: Get the details of the user by id
 * Access: Public
 * Parameters: id
 */
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((each) => each.id === id);

  if (!user) {
    return res.status(400).json({
      success: false,
      message: `User not found for id: ${id}`,
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * Route: /users
 * Method: POST
 * Description: Create a new user
 * Access: Public
 * Parameters: None
 */
app.post("/users", (req, res) => {
  const { id, name, email, role, borrowedBooks } = req.body;

  if (!id || !name || !role) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  const user = users.find((each) => each.id === id);
  if (user) {
    return res.status(409).json({
      success: false,
      message: `User already exists for id: ${id}`,
    });
  }

  users.push({
    id,
    name,
    email,
    role,
    borrowedBooks,
  });

  res.status(201).json({
    success: true,
    message: "User added successfully!",
  });
});

/**
 * Route: /users
 * Method: PUT
 * Description: Update a user
 * Access: Public
 * Parameters: id
 */
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  // check if user exists
  const user = users.find((each) => each.id === id);
  if (!user) {
    return res.status(400).json({
      success: false,
      message: `User not found for id: ${id}`,
    });
  }

  const updatedUser = users.map((each) => {
    if (each.id === id) {
      return { ...each, ...data };
    }
    return each;
  });

  res.send(200).json({
    success: true,
    message: "User updated successfully!",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} `);
});
