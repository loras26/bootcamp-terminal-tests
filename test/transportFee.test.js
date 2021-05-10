let assert = require("assert");
let transportFee = require("../transportFee");

describe('The test for the transportFee function' , function(){
    it('This function should return R20 when the string "morning" is passed to it ' , function(){
        assert.equal("R20", transportFee("morning"));
          
    });
    it('This function should return R10 when the strinng afternoon is passed to it  ' , function(){
        
        assert.equal("R10", transportFee("afternoon"));
          
    });
    it('This function should return free if the string night shift is passed to it   ' , function(){
       
        assert.equal("free", transportFee("nightshift"));  
    });
    
})