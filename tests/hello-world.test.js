const hw = require('../exercises/hello-world')

function doesLogMessage(f, message) {
    var oldLog = console.log,
        result = false;

    console.log = function(s) {
        if (s == message) {
            result = true;
        }
    };

    f();

    console.log = oldLog;

    return result;
}

describe('aufgabe 1', () => {
  it('sollte "hello world" ausgeben', () => {
    expect(doesLogMessage(hw, "hello world")).toBeTruthy()
  })
})
