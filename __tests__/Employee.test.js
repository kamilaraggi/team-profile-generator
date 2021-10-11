const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const kamila = new Employee("kamila, email@.com, 33")
    let boolean;
    if(typeof kamila === "object"){
        boolean = true
    } else{
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(kamila.getRole()).toBe("Employee")
})

  