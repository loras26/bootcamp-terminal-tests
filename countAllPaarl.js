module.exports = function (str) {
    //starting the count from zero
    var paarlCounter = 0;
    //spliting the string to convert it to an array
    var str1 = str.split(",");
    //looping over all the element in an array
    for (var i = 0; i < str1.length; i++) {
        var str2 = str1[i];
        //console.log(str2)
        //using if statement to check if it satisfy the conditions in place
        if (str2.includes("CJ")) {
            paarlCounter++;
        }

    }
    return paarlCounter;
}

