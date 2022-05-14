const { Router } = require("express");
const { check } = require("express-validator");
const { validator } = require("../middlewares/validator");
const router = Router();

const { 
    getAllArenas,
    getArenaById
} = require("../controllers/arenas.controllers");

router.get("/", getAllArenas);
router.get("/:id", [
    check('id', "id is not mongo id").isMongoId(),
    validator,
], getArenaById);

module.exports = router;