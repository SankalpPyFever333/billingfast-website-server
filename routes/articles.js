const express = require("express");
const getArticles = require("../controller/getArticles");

const router = express.Router();

router.get("/articles", getArticles)

module.exports = router;