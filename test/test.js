var hello = require("../source/module.js")
var assert = require("chai").assert
describe("helloTest", function() {
	it("test",function(){
		assert.equal("Hello", hello())
	})
})