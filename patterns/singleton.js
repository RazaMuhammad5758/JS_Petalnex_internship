const { connected } = require("process");

class Singleton{
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = this;
        }
        return Singleton.instance
    }
}
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);

// example (database connection)


class connectDatabase{
    constructor(){
        if(!connectDatabase.instance){
            this.connection = this.connectTodatabase();
            connectDatabase.instance = this;
        }
        return connectDatabase.instance;
    }

    connectTodatabase(){
        console.log("connecting to database");
        return { connected: true, connectionId: Math.random() }
        
    }

    getConnection(){
        return this.connection;
    }
}

// Testing the Singleton behavior

// First attempt to get the database connection
const db1 = new connectDatabase();
console.log("Database Connection 1:", db1.getConnection());

// Second attempt to get the database connection
const db2 = new connectDatabase();
console.log("Database Connection 2:", db2.getConnection());

// Check if db1 and db2 are the same
console.log(db1 === db2); // true, because both are the same instance



// EXAMPKLLE 2

class logger{
    constructor(){
        if(!logger.instance){
            this.logs = []
            logger.instance = this;
        }
        return logger.instance
    }

    // Method to add a log entry
    log(message){
        const timeStamp = new Date().toISOString();
        this.logs.push({message, timeStamp})
        console.log(`[${timeStamp}] ${message}`);
    }

    // Method to get all logs
    getLogs(){
        return this.logs;
    }


    // Mthod to get the count of logs
    logCount(){
        return this.logs.length;
    }
}

// testing

const logger1 = new logger();
logger1.log("User login successful")

const logger2 = new logger();
logger2.log("User requested account details");

console.log("Total logs:", logger1.logCount());

// Checking if logger1 and logger2 are the same instance
console.log(logger1 === logger2); // true
console.log("All logs:", logger1.getLogs());