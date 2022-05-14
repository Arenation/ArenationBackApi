const { Router } = require("express");
const router = Router();
const {
  getAllUsers,
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
} = require("../controllers/users.controllers");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.post("/", createUser);
router.delete("/:id", deleteUserById);

module.exports = router;
