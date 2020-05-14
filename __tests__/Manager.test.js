const Manager = require('../lib/Manager');

test('creates an manager', () => {
  const manager = new Manager('Michael', 333, 'mscott@dundermifflin.com', 123);

  expect(manager.getName()).toBe('Michael');
  expect(manager.getEmail()).toBe('mscott@dundermifflin.com');
  expect(manager.getId()).toEqual(expect.any(Number));
  expect(manager.getRole()).toBe('Manager');
  expect(manager.getOfficeNumber()).toBe(123);
});