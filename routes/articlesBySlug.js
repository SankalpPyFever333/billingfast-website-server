const express = require("express");
const { getArticleBySlug } = require("../controller/getSlugArticle");

const router = express.Router();

router.get("/article/:slug", getArticleBySlug)

module.exports = router;