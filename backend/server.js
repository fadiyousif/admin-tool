const express = require("express");
const cors = require("cors");
const path = require("path");
const contractRouter = require("./routes/contractRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", contractRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (_req, res) =>
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
  );
} else {
  app.get("/", (_req, res) => res.send("Please set to production"));
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
