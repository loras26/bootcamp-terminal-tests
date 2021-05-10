let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The test for the yearsAgo function' , function(){
    it('This function should return 0 as the number of years passed if i pass the year 2021 to it ' , function(){
        assert.equal(0, yearsAgo(2021));

    });
    it('This function should return 2 as the number of years passed if i pass the year 2019 to it' , function(){
        
        assert.equal(2, yearsAgo(2019));
    });
    it('This function should return 26 as the number of year passed if 1995 is passed to it ' , function(){
       
        assert.equal(26, yearsAgo(1995)); 
    });
    it('This function should return a negative value if we have not passed the year that we are passing on it ' , function(){
       
        assert.equal(-4, yearsAgo(2025)); 
    });
    
});