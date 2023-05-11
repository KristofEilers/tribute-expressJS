const getAllArtists = (req, res) => {
  res.send("GET all artists");
};

const getSingleArtist = (req, res) => {
  const { id } = req.params;
  res.send(`GET single artist by id ${id}`);
};

module.exports = { getAllArtists, getSingleArtist };
