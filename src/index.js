exports.min = function min(array) {
    /*if (array) {
        if (array === undefined || array.length === 0) {            
            if (!array) return 0; */
    return Math.min.apply(null, array);
};

exports.max = function max(array) {
    /* if (array) {
        if (array === undefined || array.length === 0) {
            if (!array) return 0; */
    return Math.max.apply(null, array);
};

exports.avg = function avg(array) {
    /*if (array) {
        if (array === undefined || array.length === 0) {
            if (!array) return 0;*/
    let result = array.reduce(function (a, b) {
        return a + b;
    }, 0);
    return result / array.length;
};
