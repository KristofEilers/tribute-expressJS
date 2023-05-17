const pool = require("../db");
const getAllArtists = async (req, res) => {
  try {
    const { rows: data } = await pool.query("SELECT * FROM artists");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(404).send("Somthing went wrong");
  }
};

const getSingleArtist = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      rows: [artist],
    } = await pool.query("SELECT * FROM artists WHERE id=$1", [id]);
    res.status(200).json(artist);
  } catch (err) {
    console.log(err);
    res.status(404).send("Something went wrong");
  }
};

module.exports = { getAllArtists, getSingleArtist };
