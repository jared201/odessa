/*Module for extracting stock data pseAPI*/

/*returns the price point of the SMA*/
exports.getSMAdata = function (symbol, callback){

     let result = 0;
     /*TODO implement the HTTP GET API from PSE for extracting SMA of a stock*/
     /* Closing prices for 20 day period divided by 20
     */
     callback (symbol, result);
     return result;
}

exports.getEMAdata = function (symbol, callback){

     let result = 0;
     /*
      * get SMA then the multiplier 18.18
     */
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
