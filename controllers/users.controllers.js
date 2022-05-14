const { response } = require('express');

const getAllUsers = (req, res = response) => {
    res.json({
        message: 'get all API - Controller'
    });
}

const getUserById = (req, res = response) => {
    res.json({
        message: 'get user by id API - Controller'
    });
}

const updateUserById = (req, res = response) => {
    const { id } = req.params;
    res.json({
        id: id,
        message: 'update user by id API - Controller'
    });
}

const createUser = (req, res = response) => {
    const { name, lastname } = req.body;
    res.json({
        message: 'create user API - Controller',
        data: { name: name, lastname: lastname}
    });
}

const deleteUserById = (req, res = response) => {
    res.json({
        message: 'delete user by id API - Controller'
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    createUser,
    deleteUserById
}