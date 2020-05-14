const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./src/questions');
const generateMarkdown = require('./src/generateMarkdown');

// function to write README file
const writeToFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    }
    else {
      console.log('Your Employee Tracker file has been successfully created. Check out index.html in the dist directory!');
    }
  })
}

inquirer.prompt(questions)
.then(answers => {
  return generateMarkdown(answers);
})
.then(readmeContent => {
  return writeToFile(readmeContent);
})
.catch(err => {
  console.log(err);
});