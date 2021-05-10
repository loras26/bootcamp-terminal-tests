let assert = require("assert");
let regCheck = require("../regCheck");

describe('regCheck function' , function(){
    it('This function should return true if the reg number ends with its location string"' , function(){
        assert.equal(true, regCheck("DV 23 NB GP", "GP"));
           
    });
    it('This function should return false if the reg number does not end with its location string"' , function(){
        
        assert.equal(false, regCheck("DV 23 NB MP", "L"));
        
    });
    
});
