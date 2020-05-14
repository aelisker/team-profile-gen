const Employee = require('../lib/Employee.js');

// jest.mock('../lib/Employee.js');

test('creates an employee', () => {
  const employee = new Employee('John Doe', 12345, 'email@gmail.com');

  expect(employee.name).toBe('John Doe');
  expect(employee.email).toBe('email@gmail.com');
  expect(employee.id).toEqual(expect.any(Number));
});

test('creates an employee, tests object methods', () => {
  const employee = new Employee('John Doe', 12345, 'email@gmail.com');

  expect(employee.getName()).toBe('John Doe');
  expect(employee.getEmail()).toBe('email@gmail.com');
  expect(employee.getId()).toBe(12345);
  expect(employee.getRole()).toBe('Employee');
});