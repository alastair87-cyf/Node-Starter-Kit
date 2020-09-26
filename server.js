const express = require("express");
const app = express();

app.get("/", (req, res) => console.log("GET /"));

app.listen(process.env.PORT, () => console.log("Server is listening on port 3000. Ready to accept requests!"));
