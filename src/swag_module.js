/*Module for extracting stock data pseAPI*/

/*returns the price point of the SMA*/
exports.getSMAdata = function (symbol, callback){

     let result = 0;
     /*TODO implement the HTTP GET API from PSE for extracting SMA of a stock*/
     callback (symbol, result);
     return result;
}

exports.getEMAdata = function (symbol, callback){

     let result = 0;

     callback (symbol, result);
     return result;

}

exports.getParabolic = function (symbol, callback) {
    let result = 0;
    callback (symbol, result);
    return result;
}

exports.getMFI = function (symbol, callback) {

    let result = 0;
    callback (symbol, result);
    return result;
}
