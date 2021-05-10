let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The test for the isWeekday function' , function(){
    it('This function should return true if the string start starts with "M"' , function(){
        assert.equal(true, isWeekday("Monday"));
        
    });
    it('This function should return true if the string start starts with "T"' , function(){
        
        assert.equal(true, isWeekday("Tuesday"));
    });
    it('This function should return true if the string start starts with "F"' , function(){
        
         assert.equal(true, isWeekday("Friday"));
        
    });
    it('This function should return false if the string start starts with "S"' , function(){
       
        assert.equal(false, isWeekday("Sunday"));
    });
    
});