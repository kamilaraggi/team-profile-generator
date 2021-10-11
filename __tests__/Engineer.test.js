const Enginner = require('../lib/Enginner.js');

test('creates a enginner object', () => {
    const kamila = new Enginner("kamila, email@.com, 33, kamilaraggi")
    let boolean;
    if(typeof kamila === "object"){
        boolean = true
    } else{
        boolean = false
    }
    expect(boolean).toBe(true)
    expect(kamila.getRole()).toBe("Enginner")
})
