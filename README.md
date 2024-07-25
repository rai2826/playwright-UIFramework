//The Framework follows POM design pattern to establish reusablity and cleaner tests and can scale easily to add more pages and tests.

Pre-req- Install node.js and npm on your system
#Installing Playwright
npm init playwright@latest


//Base Folder - Contains Page Manager to manage the Page objects and a fixture to make the tests cleaner
//Data Folder - Contains Json data to pass to the test cases
//Page-Objects - Contains page objects for the application , encapsulates the locator and the methods on the page to create cleaner tests and reusability.
//tests- contains the E2E Tests.
//.gitHub/workflow - contains the workflow file to run the test on Github CI on each push
