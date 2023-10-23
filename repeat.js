function repeat(str, num) {
    if (num <= 0) {
      return '';
    } else {
      return str + repeat(str, num - 1);
    }
  }
  