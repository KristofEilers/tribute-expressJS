const express = require("express");
const app = express();
const PORT = process.env.POPRT || 8080;

// Importing all Routes
const artistsRouter = require("./routes/artists");

// List of routes - initial endpoints
app.use("/", artistsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
