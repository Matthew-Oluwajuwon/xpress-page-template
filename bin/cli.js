#!/usr/bin/env node

const { execSync } = require("child_process") 
const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.log(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/Matthew-Oluwajuwon/xpress-page-template.git ${repoName}`;
const installDepsCommand = `cd ${repoName} $$ npm install`;

console.log(`Cloning the repository with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exitCode()

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) process.exitCode();

console.log(
  `Congratulations you are ready. Follow the following command to start`
);
