const { on } = require("events");

// Subject class
class Subject {
    constructor() {
        this.observers = []; // List of observers
    }

    // Method to add an observer
    subscribe(observer) {
        this.observers.push(observer);
    }

    // Method to remove an observer
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Method to notify all observers of a change
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Observer class/interface
class Observer {
    update(data) {
        // This should be overridden by specific observer implementations
        console.log("Observer received data:", data);
    }
}

// Example usage

// Create a subject
const subject = new Subject();

// Create observers
const observer1 = new Observer();
const observer2 = new Observer();

// Override the update method for specific behavior
observer1.update = function(data) {
    console.log("Observer 1 received:", data);
};

observer2.update = function(data) {
    console.log("Observer 2 received:", data);
};

// Subscribe observers to the subject
subject.subscribe(observer1);
subject.subscribe(observer2);

// Notify observers with some data
subject.notify("Event 1 occurred"); // Both observers will receive this event

// Unsubscribe one observer and notify again
subject.unsubscribe(observer1);
subject.notify("Event 2 occurred"); // Only Observer 2 will receive this event


// Example

// subject 
class weatherStation{
    constructor(){
        this.temperature = null;
        this.observers = []; // list of observers jo is me push kiye jaengy
    }


    // method to add observers
    subscribe(observer){
        this.observers.push(observer);
    }

    // method to remove observer

    unsubscribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    // method to notify all observers

    notify(){
        this.observers.forEach(observer=> observer.update(this.temperature))
    }

    // method to set a new temperature and notify observers
    setTemperature(newTemp){
        console.log(`WeatherStation: New Temperature is ${newTemp}C`);
        this.temperature = newTemp;
        this.notify(); // notify all observers
        
    }

}

// observer
class WeatherApp {
    constructor(name) {
        this.name = name;
    }

    // Called by WeatherStation to update the observer with new data
    update(temperature) {
        console.log(`${this.name} received temperature update: ${temperature}°C`);
    }
}

// Testing the Observer pattern

// Create the subject
const WeatherStation = new weatherStation();

// Create observers
const app1 = new WeatherApp("WeatherApp1");
const app2 = new WeatherApp("WeatherApp2");

// Subscribe observers to the weather station
WeatherStation.subscribe(app1);
WeatherStation.subscribe(app2);

// Change temperature - all observers get notified
WeatherStation.setTemperature(25);

// Unsubscribe one observer and change temperature again
WeatherStation.unsubscribe(app1);
WeatherStation.setTemperature(30);
