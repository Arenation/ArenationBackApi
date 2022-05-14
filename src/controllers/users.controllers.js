const { response } = require("express");
const User = require("../models/user.model.js");

const getAllUsers = async (req, res = response) => {
    const users = await User.find();
    res.status(200).json({
        status: "success",
        message: "Users found successfully",
        data: users
    });
};

const getUserById = async (req, res = response) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }
    res.status(200).json({
        status: "success",
        message: "User found successfully",
        data: user
    });
};

const updateUserById = async (req, res = response) => {
  const { id } = req.params;
  const { ...body } = req.body;

  const exist = await User.findById(id);

  if (!exist) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  await User.findByIdAndUpdate(id, body);

  res.status(200).json({
    status: "success",
    message: "User updated successfully",
    data: body,
  });

};

const createUser = async (req, res = response) => {
  const { names, lastnames, password, email, role, date } = req.body;
  const user = new User({ names, lastnames, password, email, role, date });
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return res.status(400).json({
      message: "Email already exists",
    });
  }
  await user.save();
  res.status(200).json({
    status: "success",
    message: "User created successfully",
    data: {
      names,
      lastnames,
      email,
      role,
    },
  });
};

const deleteUserById = async (req, res = response) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({
            message: "User not found",

        });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({
        status: "success",
        message: "User deleted successfully",
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
};
