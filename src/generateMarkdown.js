const createTeam = function(employeeArray) {
  let cardsArray = [];
  for (let i = 0; i < employeeArray.length; i++) {
    let card = `
    <div class='card'>
      <h3>${employeeArray[i].name}</h3>
      <h3>${ employeeArray[i].id }</h3>
      <h3>${ employeeArray[i].email }</h3>
      <h3>${ employeeArray[i].getRole() }</h3>
      `
      if (employeeArray[i].getRole() === 'Manager') {
        `<h3>${ employeeArray[i].getOfficeNumber()}</h3>`
      } else if (employeeArray[i].getRole() === 'Engineer') {
        `<h3>${ employeeArray[i].getGithub()}</h3>`
      } else {
        `<h3>${ employeeArray[i].getSchool()}</h3>`
      }
      cardsArray.push(card);
  }
  return cardsArray;
}

module.exports = employeeArray => {
  const { name, employeeId, email, role, officeNumber, githubUsername, internSchool, confirmAddEmployee } = employeeArray;
    return `Test
    ${createTeam(employeeArray)}
    `;
};