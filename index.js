const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors({ origin: "*" }));

app.get("/delayedResponse/:length", async (req, res) => {
  const { length } = req.params;
  const randomText = "lorem ";

  const ONE_SECOND_IN_MILLISECONDS = 1000;
  setTimeout(() => {
    res.send(randomText.repeat(+length));
  }, +length * ONE_SECOND_IN_MILLISECONDS || 5 * ONE_SECOND_IN_MILLISECONDS);
});

app.listen(8080, () => {
  console.log("Server running at port 8080");
});
