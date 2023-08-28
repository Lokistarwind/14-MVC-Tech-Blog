const router = require("express").Router();
const { Comment, User, Blogpost } = require("../../models");
const withAuth = require("../../utils/auth");

//get comments
router.get("/", (req, res) => {
  Comment.findAll({})
    .then((commentData) => {
      res.status(200).json(commentData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
//get comments with id
router.get("/:id", (req, res) => {
  Comment.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((commentData) => {
      res.status(200).json(commentData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//post comment
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete comment but not used
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: "No comments found with this id!" });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
