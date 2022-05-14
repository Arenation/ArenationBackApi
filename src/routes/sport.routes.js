const { Router } = require("express");
const router = Router();

const { 
    getAllSports
} = require("../controllers/sports.controllers");

router.get("/", getAllSports);

module.exports = router;