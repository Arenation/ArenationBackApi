const { response } = require('express');
const Arena = require('../models/arena.model');

const getAllArenas = async (req, res) => {
    const arenas = await Arena.find();
    res.status(200).json({
        status: "success",
        message: "Arenas found successfully",
        data: arenas
    });
};

const getArenaById = async (req, res) => {
    const { id } = req.params;
    const arena = await Arena.findById(id);
    if (!arena) {
        return res.status(404).json({
            message: "Arena not found",
        });
    }
    res.status(200).json({
        status: "success",
        message: "Arena found successfully",
        data: arena
    });
};

module.exports = { getAllArenas, getArenaById};