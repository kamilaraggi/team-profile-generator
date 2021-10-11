const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const kamila = new Intern("kamila, email@.com, 33, UNCC")
    let boolean;
    if(typeof kamila === "object"){
        boolean = true
    } else{
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(kamila.getRole()).toBe("Intern")
})
