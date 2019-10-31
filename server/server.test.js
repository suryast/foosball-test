// Setting up test tooling
var request = require("supertest");

describe("loading express", function() {
  let server;

  beforeAll(() => {
    server = require("./server");
  });
  afterAll(() => {
    server.close();
  });

  // cannot work out with this first test in the list always fails
  it("404 everything else", function testPath(done) {
    request(server)
      .get("/foo/bar")
      .expect(404, done);
  });

  it("Responds to a valid post request by returning the orginal array sent to server", async done => {
    const players = [
      { name: "Tom", won: 1, played: 1 },
      { name: "Joen", won: 0, played: 1 }
    ];

    const response = await request(server)
      .post("/api/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: players
      })
      .then(async () => {
        await response
          .text()
          .then(() => expect(response.text().toEqual(players)));
        done();
      })
      .catch(err => {
        console.log(`Error ${err}`);
        done();
      });
  });

  it("responds to /api/hello", async done => {
    const response = await request(server)
      .get("/api/hello")
      .then(async () => {
        await response
          .text()
          .then(() =>
            expect(
              response
                .text()
                .express.toEqual("A node server is running on port 5000")
            )
          );
        done();
      })
      .catch(err => {
        console.log(`Error ${err}`);
        done();
      });
  });

  it("Responds to results[] post request", async done => {
    const message =
      "I just want to say that that I got it! Check your console and the server log for the details of what you had sent through.";

    const players = [
      { name: "Tom", won: 1, played: 1 },
      { name: "Joen", won: 0, played: 1 }
    ];

    const response = await request(server)
      .post("/api/results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: players
      })
      .then(async () => {
        await response
          .text()
          .then(() => expect(response.text().toEqual(message)));
        done();
      })
      .catch(err => {
        console.log(`Error ${err}`);
        done();
      });
  });
});
