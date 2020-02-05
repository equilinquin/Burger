const express = require("express");
const burgers = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    let hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burgers.insertOne(["burger_name", "devoured"], [req.body.name, req.params.devoured], function(result) {
    console.log(req.params);
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  console.log(req.body);
    burgers.updateOne({
      devoured: req.body.devoured,
    }, condition, function(result) {
      if (result.changedRows == 0) {
        res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
module.exports = router;
