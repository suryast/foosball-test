This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Some notes for this repo

- This repo is second version on the Foosball project. The original design lives here [https://github.com/suryast/foosball-demo](https://github.com/suryast/foosball-demo).

- The first iteration of this project. I was too focused on keeping track of the scores and creating object relationship. I realised that the score wasn't the main focus of the task.

- This version is focused on recording winner and loser in a match and adding players in Blue or Green team.

- Two main objects in this version are players and results (which consist of matches).

- To install the required modules. You need to execture `yarn install` twice – once inside `client` folder and once inside the top-level directory. After that run the app by executing `yarn dev` in the top-level directory.

### Existing bugs:

- [ ] Matches can be played by many players (more than 2) vs many players (more than 2). A foosball table can accommodate up to 4 players only.
- [ ] Doubling of player with the same name. Players with the same name should be combined into a single object – combined the winning.
- [ ] Unable to keep track of individual number of wins and number of matches played by each player

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the react app and the node server in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The package.json of the react app has an entry `"proxy": "http://localhost:5000/"`.

Node server: [http://localhost:5000](http://localhost:5000)

The page will reload if you make edits.<br />

### `yarn client`

It will run the following script `cd client && yarn start`. React-based client app only.

### `yarn server`

It will run the following script `cd server && nodemon server.js`. Node server only.

### `yarn test`

Execute this at the top-level directory to run both `yarn test-client` and `yarn test-server` command sequentially.

### `yarn test-client`

Run tests for the React app only.

### `yarn test-server`

Run tests for the node server only.

## Project Brief

"Imagine that a coworking space has a foosball table in the common room. In order to settle the often asked question of who is the foosball champion, the team has elected to store the results of every game. To facilitate this process a new system will be built. The Foosball Ranking System."

### User Stories

_*As a user I can record the results of matches (no login requirements)
Able to enter the participants and the winner(s)
Assume the date of entry is the date of the match
Handle X vs X matches (1v1, 1v2, 2v2 etc)*_

_*As a user I can view the win rates
The overall win loss rate of a participant
The win loss rate of a participant against another specific participant*_
