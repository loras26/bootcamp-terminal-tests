let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function' , function(){
    it('This function should return two objects since we have two objects with qty greater than the threshold in the array ' , function(){
        assert.deepEqual([{"name":'pears',"qty":37},
        {"name":'bananas',"qty":27}]
        , findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]));

       
    });
    it('This function should return all the objects with qty greater than the threshold ' , function(){
        assert.deepEqual([
        {"name":'bananas',"qty":27}]
        , findItemsOver([{"name":"apples","qty":10},{"name":"bananas","qty":27},{"name":"apples","qty":3}]));

       
    });
    
});