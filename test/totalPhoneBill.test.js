let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The test for the totalPhoneBill function' , function(){
    it('This function should increase total by 2.75 if a string "call" or by 0.65 if the string "sms" then return the total phone bill of 7.45 if a comma separated string of 2 calls and three smss is passed' , function(){
        assert.equal("R2.75", totalPhoneBill("l"));
        assert.equal("R0.65", totalPhoneBill("m"));
        assert.equal("R0.00",totalPhoneBill("g"));
        assert.equal("R7.45", totalPhoneBill("call, sms, call, sms, sms"));

        
    });
    
})