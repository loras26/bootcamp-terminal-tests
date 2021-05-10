let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The test for the countRegNumber function' , function(){
    it('This function should return the length 3 when three registration numbers are passed to it' , function(){
        assert.equal(3, countRegNumber("CJ 123 456, CJ 123 456, CJ 123 456"));
        
           
    });
    it('This function should return the length 2 of when two registration numbers are passed to it' , function(){
        
        assert.equal(2, countRegNumber("CJ 123 456, CJ 123 456"));
           
    });
    it('This function should return the length 1 when one registration number is passed to it' , function(){
        
        assert.equal(1, countRegNumber("CJ 123 456"));
           
    });
   

});