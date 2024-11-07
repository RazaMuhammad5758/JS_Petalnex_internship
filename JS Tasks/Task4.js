class EventEmitter {
    constructor() {
      this.events = {}; // Object to store events and their listeners
    }
  
    // Method to add a listener for a specific event
    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = []; // Create an array for the event if it doesn't exist
      }
      this.events[event].push(listener); // Add the listener to the event's array
    }
  
    // Method to emit an event, calling all registered listeners
    emit(event, ...args) {
      if (this.events[event]) {
        this.events[event].forEach(listener => {
          listener(...args); // Call each listener with the provided arguments
        });
      }
    }
  
    // Method to remove a specific listener for an event
    off(event, listenerToRemove) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
      }
    }
  }
  

//Example
// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Define listener functions
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function farewell(name) {
  console.log(`Goodbye, ${name}!`);
}

// Add listeners for the 'greet' event
emitter.on('greet', greet);
emitter.on('greet', farewell);

// Emit the 'greet' event
emitter.emit('greet', 'Raza'); // Outputs: "Hello, Raza!" and "Goodbye, Raza!"

// Remove one listener
emitter.off('greet', farewell);

// Emit the 'greet' event again
emitter.emit('greet', 'Raza'); // Outputs: "Hello, Raza!" (only the remaining listener is called)
