const express = require("express");
const router = express.Router();

const { getAllArtists, getSingleArtist } = require("../controllers/artists");

router.route("/artists").get(getAllArtists);

router.route("/artists/:id").get(getSingleArtist);

module.exports = router;
