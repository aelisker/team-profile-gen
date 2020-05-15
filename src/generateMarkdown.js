const createTeam = function(employeeArray) {
  let cardsArray = [];
  for (let i = 0; i < employeeArray.length; i++) {
    let specificRoleItem;
    if (employeeArray[i].getRole() === 'Manager') {
      specificRoleItem = `Manages Office Number: ${ employeeArray[i].getOfficeNumber()}`;
    } else if (employeeArray[i].getRole() === 'Engineer') {
      specificRoleItem = `Github Username: ${ employeeArray[i].getGithub()}`;
    } else {
      specificRoleItem = `School: ${ employeeArray[i].getSchool()}`;
    }

    let card = 
    `<div class="col-4 mt-4">
        <div class="card h-100">
          <div class="card-body">
            <h3>Name: ${employeeArray[i].name}</h3>
            <h3>Employee ID: ${ employeeArray[i].id }</h3>
            <h3>Email: ${ employeeArray[i].email }</h3>
            <h3>Company Role: ${ employeeArray[i].getRole() }</h3>
            <h3>${ specificRoleItem }</h3>
          </div>
        </div>
      </div>
      `;

    cardsArray.push(card);
  }
  return cardsArray.join(' ');
}

module.exports = employeeArray => {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
  </head>
  <body>
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
          <h2 class="text-center text-light">My Team</h2>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
      ${createTeam(employeeArray)}
      </div>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
  </body>
</html>
    `;
};