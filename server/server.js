const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.status(200).send("ok");
});

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

// not sure how to structure this to prevent error when Jest tests are running
app.listen(port, () => console.log(`Listening on port ${port}`));

const server = app.listen(5002, function() {
  const port = server.address().port;
  console.log("Example app listening at port %s", port);
});

module.exports = server;
