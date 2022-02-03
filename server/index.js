const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
const axios = require("axios");

app.get("/api/:latlon", async (req, res) => {
  let requestlatlong = req.params.latlon;
  console.log(requestlatlong);
  const latlon = requestlatlong.split(',');
  const lat = latlon[0];
  const lon = latlon[1];
  try {
    const response = await axios.get(
      `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`
    );
    const city = response.data[0].woeid;
    const getwoeid = await axios.get(
      `https://www.metaweather.com/api/location/${city}`
    );
    res.status(200).json(getwoeid.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
