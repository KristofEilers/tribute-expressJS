const express = require("express");
const app = express();
const PORT = process.env.POPRT || 8080;
const cors = require("cors");

// Importing all Routes
const artistsRouter = require("./routes/artists");

app.use(cors());

app.get("/artists", (req, res) => {
  // send the response with the Access-Control-Allow-Origin header
  res.header("Access-Control-Allow-Origin", "*");
  res.send("list of artists");
});

// List of routes - initial endpoints
app.use("/", artistsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
