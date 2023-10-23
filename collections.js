// Convert an array to a Set.
function arrToSet(arr) {
    const set = new Set();
    for (const item of arr) {
      set.add(item);
    }
    return set;
  }
  
  // Convert an array to a string.
  function arrToStr(arr) {
    return arr.join('');
  }
  
  // Convert a Set to an array.
  function setToArr(set) {
    return Array.from(set);
  }
  
  // Convert a Set to a string.
  function setToStr(set) {
    return Array.from(set).join('');
  }
  
  // Convert a string to an array.
  function strToArr(str) {
    return str.split('');
  }
  
  // Convert a string to a Set.
  function strToSet(str) {
    const set = new Set();
    for (const char of str) {
      set.add(char);
    }
    return set;
  }
  
  // Convert a Map to an object.
  function mapToObj(map) {
    const obj = {};
    for (const [key, value] of map) {
      obj[key] = value;
    }
    return obj;
  }
  
  // Convert an object to an array of its values.
  function objToArr(obj) {
    return Object.values(obj);
  }
  
  // Convert an object to a Map.
  function objToMap(obj) {
    const map = new Map();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        map.set(key, obj[key]);
      }
    }
    return map;
  }
  
  // Convert an array to an object with the array indices as keys.
  function arrToObj(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[i] = arr[i];
    }
    return obj;
  }
  
  // Convert a string to an object with the string indices as keys.
  function strToObj(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
      obj[i] = str[i];
    }
    return obj;
  }
  
  // Get the "super" type of a variable, including Sets, Maps, Arrays, Functions, null, objects, numbers, strings.
  function superTypeOf(e) {
    if (e === null) {
      return 'null';
    }
  
    const instances = { Set, Map, Array, Function };
    for (const [key, value] of Object.entries(instances)) {
      if (e instanceof value) {
        return key;
      }
    }
  
    const types = { Number: 'number', String: 'string', Object: 'object' };
    for (const [key, value] of Object.entries(types)) {
      if (typeof e === value) {
        return key;
      }
    }
  
    return typeof e;
  }
  