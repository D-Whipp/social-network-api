const router = require("express").Router();

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
router.route("/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
