const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
    res.render("home/index", {
        count1: 1000,
        count2: 200000
    });
});


router.get("/tips", function(req, res) {
    res.render("tips/index", {
        count1: 1000,
        count2: 200000
    });
});

router.get("/statistics", function(req, res) {
    res.render("statistics/index", {
        count1: 1000,
        count2: 200000
    });
});

router.get("/busyMap", function(req, res) {
    res.render("busyMap/index", {
        count1: 1000,
        count2: 200000
    });
});

module.exports = router;