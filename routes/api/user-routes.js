const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  addFriend,
  updateUser,
  deleteUser,
  deleteFriend,
} = require("../../controllers/user-controller");

// gets all uses and post at /api/users
router.route("/").get(getAllUsers).post(createUser);

// setup get one, put, and delete at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// BONUS remove associated thoughts
// router.route("/:id/thoughts").delete(deleteThoughts);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
