/* esa function jis me kisi function ne ktny time execute hona h or ktny time period me hona h 
isy throttle function kehty hen */

function throttle(fn, limit) {
    let lastCall = 0; // Timestamp of the last function call
  
    return function(...args) {
      const now = Date.now(); // Get current time in milliseconds
  
      if (now - lastCall >= limit) {
        lastCall = now; // Update the last call timestamp
        fn.apply(this, args); // Call the original function with the correct `this` context and arguments
      }
    };
  }
  