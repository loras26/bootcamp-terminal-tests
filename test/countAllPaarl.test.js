let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The test for the countAllPaarl function' , function(){
    it('This function should return the length 3 when three regNos with the string start "CJ" are included in the comma separated passed to it ' , function(){
        assert.equal(3, countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"));
        
    });
    it('This function should return the length 2 when two regNos with the string start "CJ" are included in the comma separated passed to it ' , function(){
        
        assert.equal(2, countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345"));
        
    });
    it('This function should return the length 1 when one regNo with the string start "CJ" is included in the comma separated passed to it ' , function(){
        
        assert.equal(1, countAllPaarl("CJ 345 123, CL 123-546"));  
    });
    
})