// array of questions for user
const questions = [
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
  }
];

module.exports = questions;