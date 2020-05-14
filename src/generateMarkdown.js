const createTeam = function(employeeArray) {
  const cardsArray = [];
  for (let i = 0; i < employeeArray.length; i++) {
    let specificRoleItem;
    if (employeeArray[i].getRole() === 'Manager') {
      specificRoleItem = `${ employeeArray[i].getOfficeNumber()}`;
    } else if (employeeArray[i].getRole() === 'Engineer') {
      specificRoleItem = `${ employeeArray[i].getGithub()}`;
    } else {
      specificRoleItem = `${ employeeArray[i].getSchool()}`;
    }

    let card = `
    <div class='card'>
      <h3>${employeeArray[i].name}</h3>
      <h3>${ employeeArray[i].id }</h3>
      <h3>${ employeeArray[i].email }</h3>
      <h3>${ employeeArray[i].getRole() }</h3>
      <h3>${ specificRoleItem }</h3>
    </div>`;
      
    cardsArray.push(card);
  }
  cardsArray.join('');
  return cardsArray;
}

module.exports = employeeArray => {
  const { name, employeeId, email, role, officeNumber, githubUsername, internSchool, confirmAddEmployee } = employeeArray;
    return `Test
    ${createTeam(employeeArray)}
    `;
};