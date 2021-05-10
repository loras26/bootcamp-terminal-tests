let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The test for the fromWhere function' , function(){
    it('This function should return Bellville if a regNo that starts with the string start "CY" is passed to it.' , function(){
        assert.equal("Bellville", fromWhere("CY"));
        

        
    });
    it('This function should return Paarl if a regNo that starts with the string start "CJ" is passed to it.' , function(){
        
        assert.equal("Paarl", fromWhere("CJ"));
        

        
    });
    it('This function should return Cape Town if a regNo that starts with the string start "CA" is passed to it  ' , function(){
       
        assert.equal("Cape Town", fromWhere("CA"));
        

        
    });
    it('This function should return "Some other place!" if a regNo that starts with the any other string start is passed to it  ' , function(){
       
        assert.equal("Some other place!", fromWhere("MP"));

        
    });
    
})