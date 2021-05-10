let assert = require("assert");
let greet = require("../greet");

describe('the test for the greet function' , function(){
    it('this function should return : "Hello, Pupu" if pupu is passed to the function' , function(){
        assert.equal("Hello, Pupu", greet("Pupu"));

       
    });
    it('this function should return : "Hello, Gugu" if Gugu is passed to the function' , function(){
        assert.equal("Hello, Gugu", greet("Gugu"));

       
    });
    it('this function should return : "Hello, Ruru" if Ruru is passed to the function' , function(){
        assert.equal("Hello, Ruru", greet("Ruru"));

       
    });


});