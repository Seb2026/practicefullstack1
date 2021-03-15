const express = require("express");
const router = express.Router();

const Post = require("../models/Post.model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/addpost", (req, res, next) => {
  Post.create(req.body)
    .then((createdPost) => {
      console.log(createdPost);
      res.json({ createdPost });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/posts", (req, res, next) => {
  Post.find()
    .then((allPosts) => {
      res.json(allPosts);
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
