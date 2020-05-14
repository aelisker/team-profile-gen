// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of this employee?',
    validate: name => {
      if (name) {
        return true;
      }
      else {
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
      }
      else if (isNaN(employeeId)) {
        console.log('Employee IDs must be a number!');
        return false;
      }
      else {
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
      }
      else {
        return true;
      }
    }
  },
  {
    type: 'list',
    name: 'role',
    message: 'Please choose the employee\'s role.',
    choices: ['MIT', 'GNU GPLv3', 'GNU APGLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache 2.0', 'Boost Software Licence 1.0', 'Unlicensed'],
    default: 'MIT'
  },
  
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    when: ({confirmContact}) => confirmContact,
    validate: email => {
      if (email) return true;
      else {
        console.log('You must enter an email address');
        return false;
      }
    }
  }
];

module.exports = questions;