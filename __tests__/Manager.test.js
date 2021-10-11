const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const kamila = new Manager("kamila, email@.com, 33, 828")
    let boolean;
    if(typeof kamila === "object"){
        boolean = true
    } else{
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(kamila.getRole()).toBe("Manager")
})
