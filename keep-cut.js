function cutFirst(string) {
  return string.slice(2);
}

function cutLast(string) {
  return string.slice(0, -2);
}

function cutFirstLast(string) {
  return string.slice(2, -2);
}

function keepFirst(string) {
  if (string.length <= 4) {
    return string;
  }
  return string.slice(0, 2);
}

function keepLast(string) {
  if (string.length <= 4) {
    return string;
  }
  return string.slice(-2);
}

function keepFirstLast(string) {
  if (string.length <= 4) {
    return string;
  }
  return string[0] + string[1] + string[string.length-2] + string[string.length-1];
}
