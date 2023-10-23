function sign(num) {
    if (isNaN(num)) {
      return undefined;
    } else if (num > 0) {
      return 1;
    } else if (num < 0) {
      return -1;
    } else {
      return 0;
    }
  }
  
  function sameSign(a, b) {
    return (a > 0 && b > 0) || (a < 0 && b < 0) || (a === 0 && b === 0);
  }
