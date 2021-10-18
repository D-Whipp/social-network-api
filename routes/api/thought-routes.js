const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// gets all thoughts and creates new thought
router.route("/").get(getAllThoughts).post(createThought);

// get single thought by id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtid/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// delete a reaction
router.route("/:thoughtId/:reactionId").delete(deleteReaction);

module.exports = router;
