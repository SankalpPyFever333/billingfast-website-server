const fs = require("fs/promises");
const path = require("path");

async function getArticleBySlug(req, res) {
    const { slug } = req.params;
    console.log("[Slug]", slug);
    if (!slug) {
        return res.status(400).json({ message: "slug is required" });
    }

    try {
        const metaDataPath = path.join(__dirname, "../articles", `${slug}.json`);
        const contentPath = path.join(__dirname, "../articles", "content", `${slug}.md`)

        console.log("metadata path:", metaDataPath);
        console.log("content path:", contentPath);

        const meta = JSON.parse(await fs.readFile(metaDataPath, "utf-8"))
        const content = await fs.readFile(contentPath, "utf-8");

        return res.json({ ...meta, content })

    } catch (error) {
        if (error.code === "ENOENT") {
            return res.status(404).json({ message: "Article not found" })
        }
        console.error("Error in fetching article by slug:", error);
        res.status(500).json({ message: "some internal error" })
    }
}

module.exports = { getArticleBySlug };
