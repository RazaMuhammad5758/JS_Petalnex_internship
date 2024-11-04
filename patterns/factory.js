/* Imagine we have a Transport Factory that creates different types of transport based on a need: Car, Bike, or Bus. Instead of having the client code directly instantiate Car, Bike, or Bus, it asks the TransportFactory for a specific type, which then returns the appropriate instance.

is me PRODUCT or uska USE btaty hen*/


// Different types of transport classes
class Car {
    constructor() {
        this.type = "Car";
    }

    drive() {
        console.log("Driving a car");
    }
}

class Bike {
    constructor() {
        this.type = "Bike";
    }

    ride() {
        console.log("Riding a bike");
    }
}

class Bus {
    constructor() {
        this.type = "Bus";
    }

    drive() {
        console.log("Driving a bus");
    }
}

// Factory class to create the appropriate transport based on a type
class TransportFactory {
    static createTransport(transportType) {
        if (transportType === "car") {
            return new Car();
        } else if (transportType === "bike") {
            return new Bike();
        } else if (transportType === "bus") {
            return new Bus();
        } else {
            throw new Error("Unknown transport type");
        }
    }
}

// Example usage
const car = TransportFactory.createTransport("car");
car.drive(); // Output: Driving a car

const bike = TransportFactory.createTransport("bike");
bike.ride(); // Output: Riding a bike

const bus = TransportFactory.createTransport("bus");
bus.drive(); // Output: Driving a bus
