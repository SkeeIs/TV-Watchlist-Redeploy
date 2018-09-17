var express = require("express");

var router = express.Router();

// Import the model (show.js) to use its database functions.
var show = require("../models/show.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  show.all(function(data) {
    res.render("index", {shows: data});
  });
});

router.post("/api/shows", function(req, res) {
  show.create(req.body, function(result) {
    res.redirect("/");
  });
});

router.put("/api/shows/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  show.update( {
    watched_status: req.body.watched_status,
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, ID does not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.put("/api/shows/liked/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  show.update( {
    liked: req.body.liked
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, ID does not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/shows/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  show.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, ID does not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
