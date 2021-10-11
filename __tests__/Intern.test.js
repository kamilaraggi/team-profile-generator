const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('kamila', 'email', 33, "UNCCharlotte");

    expect(intern.name).toBe('kamila');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('UNCCharlotte');
 
})

test("gets intern's name", () => {
    const intern = new Intern('kamila', 'email', 33);
  
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
  });

  test("gets intern's id", () => {
    const intern = new Intern('kamila', 'email', 33);
  
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
  });

  test("gets intern's email", () => {
    const intern = new Intern('kamila', 'email', 33);
  
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
  });

  test("gets intern's school", () => {
    const intern = new Intern('kamila', 'email', 33, 'UNCCharlotte');
  
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
  });