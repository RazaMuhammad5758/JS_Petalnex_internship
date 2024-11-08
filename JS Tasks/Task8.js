Function.prototype.myBind = function(context, ...args) {
    const originalFunction = this; // Store the reference to the original function

  return function(...newArgs) {
    // Use `apply` to call the original function with the correct `this` and arguments
    return originalFunction.apply(context, [...args, ...newArgs]);
  };
};
  
  function greet(greeting, name) {
    console.log(`${greeting}, ${name}`);
  }
  
  const greetHello = greet.myBind(null, 'Hello');
  greetHello('world');  // 'Hello, World'
  