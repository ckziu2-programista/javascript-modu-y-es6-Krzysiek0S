exports.capitalize = function(str) {
    if (!str) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

exports.toUpperCase = function(str) {
    return str.toUpperCase();
}

exports.toLowerCase = function(str) {
    return str.toLowerCase();
}