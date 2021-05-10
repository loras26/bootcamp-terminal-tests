module.exports = function (salesData) {

    var salesDataMap = {};

    for (var i = 0; i < salesData.length; i++) {

        var salesData1 = salesData[i]
        salesDataMap[salesData1.department] = 0;
    }
    for (var i = 0; i < salesData.length; i++) {

        var salesData1 = salesData[i]
        var currentDepTot = salesDataMap[salesData1.department];
        currentDepTot += salesData1.sales;
        salesDataMap[salesData1.department] = currentDepTot
    }

    var currentMaxSales = 0
    var currentDepartment = "";
    for (var salesDataDepartment in salesDataMap) {

        var currentSalesDataDepartmentSales = salesDataMap[salesDataDepartment];
        if (currentSalesDataDepartmentSales > currentMaxSales) {
            currentMaxSales = currentSalesDataDepartmentSales
            currentDepartment = salesDataDepartment;
        }
    }

    return currentDepartment
}
  //
