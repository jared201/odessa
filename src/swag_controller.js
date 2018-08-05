/* This will handle the logic for the SWAG trading system */

exports.processAll = function (symbol, callback){

    const swag = require ('./src/swag_module');
    const smaData = 0;
    const emaData = 0;
    const psar = 0;
    const mfi = 0;
    let stockInfo = {};
    stockInfo.symbol = symbol;
    stockInfo.closePrice = 0; //coming from PSE API
    swag.getSMAdata(symbol, (sym, result) => {
      smaData = result;
    });
    swag.getEMAdata(symbol, (sym, result) => {
      emaData = result;
    });
    swag.getParabolic(symbol, (sym, result) => {
      psar = result;
    });
    swag.getMFI(symbol, (sym, result) => {
      mfi = result;
    });

    /*Identify the buying pattern*/
    if (smaData > emaData){
      if (stockInfo.closePrice < psar){
        if (mfi < 0.2){
           /*TODO call the nodemailer to send user that this stock has a
             good setup for a BUY*/
        }
      }
    }
}
