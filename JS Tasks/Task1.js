function deepEqual(obj1, obj2) {
    // Step 1: Check for reference equality
    if (obj1 === obj2) return true;
  
    // Step 2: Check for null values and type mismatches
    if (obj1 == null || obj2 == null || typeof obj1 !== typeof obj2) return false;
  
    // Step 3: Handle arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) return false;
      for (let i = 0; i < obj1.length; i++) {
        if (!deepEqual(obj1[i], obj2[i])) return false;
      }
      return true;
    }
  
    // Step 4: Handle objects
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
      let keys1 = Object.keys(obj1);
      let keys2 = Object.keys(obj2);
      if (keys1.length !== keys2.length) return false;
  
      for (let key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) return false;
      }
      return true;
    }
  
    // Step 5: For all other cases, they are not equal
    return false;
  }
  

console.log(deepEqual(1, 1)); // true
console.log(deepEqual({a: 1}, {a: 1})); // true
console.log(deepEqual({a: 1}, {b: 1})); // false
console.log(deepEqual([1, 2], [1, 2])); // true
console.log(deepEqual([1, {x: 2}], [1, {x: 2}])); // true
console.log(deepEqual({a: {b: 2}}, {a: {b: 2}})); // true
console.log(deepEqual({a: {b: 2}}, {a: {b: 3}})); // false
