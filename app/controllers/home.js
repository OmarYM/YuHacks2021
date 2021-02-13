const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
    res.render("home/index", {
        count1: 1000,
        count2: 200000
    });
});

module.exports = router;