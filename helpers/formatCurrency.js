function convert(money){
  return 'Rp. ' + money.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

module.exports = convert