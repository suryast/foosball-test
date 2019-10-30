const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: `A node server is running on port ${port}` });
});

app.post("/api/results", (req, res) => {
  console.log(req.body);
  res.send(
    `I just want to say that that I got it! Check your console and the server log for the details of what you had sent through.`
  );
});

app.post("/api/players", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
