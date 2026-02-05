const fs = require("fs/promises");
const path = require("path");

async function getArticles(req, res) {
    const activeIds = JSON.parse(await fs.readFile(path.join(__dirname, "../articles/active.json"), "utf-8"));
    console.log(activeIds["active-article-ids"]);

    const articles = [];

    for (const id of activeIds["active-article-ids"]) {
        const metaDataPath = path.join(__dirname, "../articles", `${id}.json`)
        const contentPath = path.join(__dirname, "../articles", "content", `${id}.md`)

        const meta = JSON.parse(await fs.readFile(metaDataPath, "utf-8"))
        const content = await fs.readFile(contentPath, "utf-8");

        articles.push({ ...meta, content });
    }

    res.json(articles);
}

module.exports = getArticles;