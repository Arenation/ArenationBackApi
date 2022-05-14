const { Router } = require("express");
const { check } = require("express-validator");
const { validator } = require("../middlewares/validator");
const router = Router();
const {
  getAllUsers,
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
} = require("../controllers/users.controllers");

router.get("/", getAllUsers);
router.get("/:id", [
  check("id", "Id is not mongo id").isMongoId(),
  validator,
], getUserById);
router.put("/:id",[
  check('id', "id is not mongo id").isMongoId(),
  validator,
], updateUserById);
router.post("/", [
  check("names", "Names is required").not().isEmpty(),
  check("lastnames", "Lastnames is required").not().isEmpty(),
  check("password", "Password is required").not().isEmpty(),
  check("email", "Email is required").not().isEmpty().isEmail(),
  check("role", "Role is required").not().isEmpty(),
  check("date", "Date is required").not().isEmpty().isDate("YYYY-MM-DD"),
  validator,
], createUser);
router.delete("/:id",[
  check('id', "id is not mongo id").isMongoId(),
  validator,
], deleteUserById);

module.exports = router;
