const express = require("express");
const router = require("./routes/articles");
const app = express();
const PORT = 8000
const cors = require("cors");

app.use(cors())

app.use("/api", router)
app.use("/api", require("./routes/articlesBySlug"))

app.listen(PORT, () => {
    console.log("server started")
})
