const express = require("express");
const request = require("request");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/*", (req, res) => {
  const params = req.originalUrl;
  request(
    { url: `https://api.nft-maker.io${params}` },
    (error, response, body) => {
      if (error) {
        return res.status(500).json({ type: "error", message: error.message });
      }

      res.send(body);
    }
  );
});

const PORT = 4000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
