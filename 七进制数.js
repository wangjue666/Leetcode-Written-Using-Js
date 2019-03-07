var convertToBase7 = function(num) {
    if (num === 0) return '0'
    let res = ''
    let absNum = Math.abs(num)
    while (absNum > 0) {
      res = absNum % 7 + res
      absNum = parseInt(absNum / 7)
    }
    if (num < 0) {
      res = '-' + res
    }
    return res
  };