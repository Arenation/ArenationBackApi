const { response } = require('express');
const Sport = require('../models/sport.model');

const getAllSports = async (req, res = response) => {
    const sports = await Sport.find();
    res.status(200).json({
        status: "success",
        message: "Sports found successfully",
        data: sports
    });
}

module.exports = { getAllSports };