module.exports = function (itemList1, threshold) {
    var threshold = 20;
    //console.log(threshold)
    //console.log(itemList1)
    var results = []
    for (var j = 0; j < itemList1.length; j++) {
        var item1 = itemList1[j]
        console.log(item1)
        if (item1.qty > threshold) { results.push(item1) }
        //console.log(item1)
    }
    return results
}
