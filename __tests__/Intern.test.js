const Intern = require('../lib/Intern');

test('creates an Intern', () => {
  const intern = new Intern('Ryan', 54321, 'ryan@gmail.com', 'Hogwarts');

  expect(intern.getName()).toBe('Ryan');
  expect(intern.getEmail()).toBe('ryan@gmail.com');
  expect(intern.getId()).toEqual(expect.any(Number));
  expect(intern.getRole()).toBe('Intern');
  expect(intern.getSchool()).toBe('Hogwarts');
});