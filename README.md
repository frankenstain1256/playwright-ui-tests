# playwright-ui-tests
QA automation test task

This repository created for a demonstration of QA Automation test task.
Task demands to write an automated test using Playwright and TypeScript that does the following:
1.	Opens the login page
2.	Enters an incorrect username and password
3.	Verifies that an error message appears on the screen

It has the following structure:
1) project.json - project manifest file;
2) playwright.config.ts - project configuration file;
3) folder 'tests' that contains 3 test files:
  a) login-negative.spec.ts - login test with wrong login and wrong password;
  b) login-positive.spec.ts - login test with correct login and correct password;
  c) login-wrongpassword.spec.ts - login test with correct login and wrong password;
5) folder 'test-results' that contains files (screenshots) generated during tests execution;
6) this readme file.

To run this project you need to have all dependencies preinstalled (Node.JS, Playwright with TypeScript).

Test task was performed on 19 April 2026.
