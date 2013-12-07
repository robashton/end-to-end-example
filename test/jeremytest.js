var should = require('should')

function add(func, x) {
  if (x === 2)
    return func(x)
  // do nothing


                              ;
}


function asserter() {
  var self = this
  self.called = false
  return function() {
    self.called = true
  }
}

describe("testing some horrible add function", function() {
  it("will return nothing with an odd number", function() {
      should.strictEqual(undefined, add(null, 1))
  })
  it("will return the result of my awesome function when calling it with 2", 
    function() {
      var call = asserter()
      add(asserter, 2)
  })
})

