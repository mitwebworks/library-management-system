const mongoose = require("mongoose");
const { UserModel } = require("../models");

exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find();

  if (!users.length || users.length == 0) {
    return res.status(404).json({
      success: false,
      message: "No user found in the system",
    });
  }

  res.status(200).json({
    success: true,
    data: users,
  });
};

/**
 * Get user by id
 */
exports.getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await UserModel.findById(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: `No user found for id ${id} `,
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

/**
 * Create a new user
 */
exports.createUser = async (req, res) => {
  const { data } = req.body;

  const success = await UserModel.create(data);

  if (!success) {
    return res.status(404).json({
      success: false,
      message: "Unable to create user",
    });
  }

  res.status(200).json({
    success: true,
    data: await UserModel.find(),
  });
};

/**
 * Update user by id
 */
exports.updateUserById = async (req, res) => {
  const { id } = req.params;

  const updateUser = await UserModel.findByIdAndUpdate(
    id,
    { $set: req.body.data },
    { new: true },
  );

  if (!updateUser) {
    return res.status(404).json({
      success: false,
      message: "Unable to update user",
    });
  }

  res.status(200).json({
    success: true,
    data: updateUser,
  });
};

/**
 * Delete user by id
 */
exports.deleteUserById = async (req, res) => {
  const { id } = req.params;

  const success = await UserModel.findByIdAndDelete(id);

  if (!success) {
    return res.status(404).json({
      success: false,
      message: "Unable to delete user",
    });
  }

  res.status(200).json({
    success: true,
    data: await UserModel.find(),
  });
};
