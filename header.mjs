import fs from "fs";
import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const git = simpleGit();
const backendFiles = [
  "server.js",
  "app.js",
  "routes.js",
  "controllers/userController.js",
  "models/User.js",
  "middlewares/authMiddleware.js",
  "config/database.js",
];

// Realistic commit messages
const commitMessages = [
  "Implemented JWT authentication",
  "Refactored API routes for better structure",
  "Optimized DB queries for faster performance",
  "Fixed session expiration issue",
  "Added role-based access control",
  "Improved logging for error tracking",
  "Implemented WebSocket support",
  "Enhanced security by sanitizing user input",
];

// Function to modify a backend file before committing
const modifyFile = (filePath) => {
  const timestamp = new Date().toISOString();
  const newContent = `// Last updated: ${timestamp}\n`;
  fs.appendFileSync(filePath, newContent, "utf8");
};

// Function to create commits with realistic changes
const makeCommits = (n, startYear, endYear) => {
  if (n === 0) {
    console.log("All commits created. Pushing to GitHub...");
    return git.push();
  }

  const year = random.int(startYear, endYear);
  const week = random.int(0, 54);
  const day = random.int(0, 6);
  const hour = random.int(9, 23);
  const minute = random.int(0, 59);
  const second = random.int(0, 59);

  const date = moment()
    .year(year)
    .add(week, "w")
    .add(day, "d")
    .hour(hour)
    .minute(minute)
    .second(second)
    .format();

  const commitMessage = commitMessages[random.int(0, commitMessages.length - 1)];
  const fileToModify = backendFiles[random.int(0, backendFiles.length - 1)];

  modifyFile(fileToModify);

  console.log(`Committing: ${commitMessage} on ${date}`);

  git.add([fileToModify]).commit(commitMessage, { "--date": date }, () => {
    makeCommits(n - 1, startYear, endYear);
  });
};

// Run the script to generate realistic backend commits
makeCommits(100, 2016, 2023);
