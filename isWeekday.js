module.exports = function (day) {
    if (day.startsWith("M")) { return true; }
    else if (day.startsWith("F")) { return true }
    else if (day.startsWith("T")) { return true }
    else { return false; }
}