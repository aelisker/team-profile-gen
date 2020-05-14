const Engineer = require('../lib/Engineer');

test('creates an Engineer', () => {
  const engineer = new Engineer('Jane Doe', 54321, 'jane@gmail.com', 'engineergit');

  expect(engineer.getName()).toBe('Jane Doe');
  expect(engineer.getEmail()).toBe('jane@gmail.com');
  expect(engineer.getId()).toEqual(expect.any(Number));
  expect(engineer.getRole()).toBe('Engineer');
  expect(engineer.getGithub()).toBe('engineergit');
});