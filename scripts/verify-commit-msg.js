// ./scripts/verify-commit-msg.js

const fs = require("node:fs");
const commitMsgFile = process.argv[2];
const commitMsg = fs.readFileSync(commitMsgFile, "utf8");

const commitPattern = /^(feat|fix|docs|style|refactor|test|chore):.{1,72}$/;

if (!commitPattern.test(commitMsg)) {
  console.error(`
Invalid commit message format.
  
Commit message must match format: type: description
Where type is one of:
- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code
- refactor: A code change that neither fixes a bug nor adds a feature
- test: Adding missing tests
- chore: Changes to build process or auxiliary tools

Example: feat: add user authentication
  `);
  process.exit(1);
}
