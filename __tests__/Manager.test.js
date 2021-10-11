const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('kamila', 'email', 33, 828);

    expect(manager.name).toBe('kamila');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email');
    expect(manager.officeNumber).toEqual(expect.any(Number));

 
})

test("gets manager's name", () => {
    const manager = new Manager('kamila', 'email', 33);
  
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
  });

  test("gets manager's id", () => {
    const manager = new Manager('kamila', 'email', 33);
  
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
  });

  test("gets manager's email", () => {
    const manager = new Manager('kamila', 'email', 33);
  
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
  });