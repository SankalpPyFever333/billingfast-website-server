const express = require("express");
const router = require("./routes/articles");
const app = express();
const PORT = 8000


app.use("/api", router)

app.listen(PORT, () => {
    console.log("server started")
})
