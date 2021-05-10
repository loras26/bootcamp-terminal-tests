let assert = require("assert");
let isFromBellville = require("../isFromBellville");
describe('The test for isFromBellville function' , function(){
    it('This function should return false if the string start does not start with "CY"' , function(){
        assert.equal(false, isFromBellville("CJ 123 456"));
        
    
    });
    it('This function should return true if the string start starts with "CY"' , function(){
        
        assert.equal(true, isFromBellville("CY 123 456"));
    
    });
    

});
