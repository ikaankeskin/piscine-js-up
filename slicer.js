function slice(data, start, end) {
    // Handle negative indices
    if (start < 0) {
      start = data.length + start;
    }
    if (end === undefined || end > data.length) {
      end = data.length;
    }
    if (end < 0) {
      end = data.length + end;
    }
  
    // Handle strings
    if (typeof data === 'string') {
      let result = '';
      for (let i = start; i < end; i++) {
        result += data[i];
      }
      return result;
    }
  
    // Handle arrays
    let result = [];
    for (let i = start; i < end; i++) {
      result.push(data[i]);
    }
    return result;
  }
  