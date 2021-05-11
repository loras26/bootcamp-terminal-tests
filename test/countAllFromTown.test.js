let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");
describe('The test for the countAllFromTown function' , function(){
    it('This function return the length 3 when three regNos with the string start "CL" are passed ' , function(){
        assert.equal(3, countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341,'CL'"));
          
    });
    it('This function should return the length 0 when no regNo with the string start "CL" is passed to it ' , function(){
        assert.equal(0, countAllFromTown("CY 124,CY 567,CA 345, CJ 456,CJ 341,'CL'"));
          
    });
    
})