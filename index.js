const fs = require('fs');
const inquirer = require('inquirer');
// const questions = require('./src/questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
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
function addEmployee(employeeArray) {
  if (!employeeArray) {
    employeeArray = [];
  }
 
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of this employee?',
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log ('Employees must have a name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Please enter the employee\'s ID.',
      validate: employeeId => {
        if (!employeeId) {
          console.log('All employees working here are assigned an ID!');
          return false;
        } else if (isNaN(employeeId)) {
          console.log('Employee IDs must be a number!');
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter the employee\'s email address.',
      validate: email => {
        if (!email) {
          console.log('Employee\'s must have an associated email address!');
          return false;
        } else if (!email.includes('@')) {
          console.log('That doesn\'t look like a valid email address. Please try again!');
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'list',
      name: 'role',
      message: 'Please choose the employee\'s role.',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    // found solution to conditional questions on StackOverflow: https://stackoverflow.com/questions/56412516/conditional-prompt-rendering-in-inquirer
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the office number this employee manages?',
      when: (answers) => answers.role === 'Manager',
      validate: officeNumber => {
        if (!officeNumber) {
          console.log('All managers manage an office!');
          return false;
        } else if (isNaN(officeNumber)) {
          console.log('This company organizes offices by office number. Please enter a number!');
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is this engineer\'s Github username?',
      when: (answers) => answers.role === 'Engineer',
      validate: github => {
        if (!github) {
          console.log('All engineers are required to have a Github account!');
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'What school does / did this intern attend?',
      when: (answers) => answers.role === 'Intern',
      validate: school => {
        if (!school) {
          console.log('Interns must have an associated school!');
          return false;
        } else if (!isNaN(school)) {
          console.log('What school is named a number? Try again.');
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another employee?',
      default: false
    }
  ])
  .then(employeeData => {
    let { name, employeeId, email, role, officeNumber, githubUsername, internSchool, confirmAddEmployee } = employeeData;
    let employeeObj;
    if (role === 'Manager') {
      employeeObj = new Manager (name, employeeId, email, officeNumber);
      console.log(employeeObj);
    } else if (role === 'Engineer') {
      employeeObj = new Engineer (name, employeeId, email, githubUsername);
      console.log(employeeObj);
    } else {
      employeeObj = new Intern (name, employeeId, email, internSchool);
      console.log(employeeObj);
    }
    employeeArray.push(employeeObj);
    console.log(employeeArray);

    if (confirmAddEmployee) {
      return addEmployee(employeeArray);
    } else {
      return employeeArray;
    }
  });
};

addEmployee()
  .then(employeeArray => {
    return generateMarkdown(employeeArray);
  })
  .then(readmeContent => {
    return writeToFile(readmeContent);
  })
  .catch(err => {
    console.log(err);
  });
