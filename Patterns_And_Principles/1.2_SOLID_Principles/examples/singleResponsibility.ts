// Antipattern God object:
class User {
    id: number;
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    save() {

    }
    log() {

    }
    send() {

    }
    print() {

    }
}

// Good pattern

class Person {
    id: number;
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Logger {
    log() {

    }
}

class Sender {
    send() {

    }
    get() {

    }
}

class Printer {
    printToPDF() {

    }
    printToDocx() {

    }
}

class Database {
    save() {

    }
    change() {

    }
    read() {
        
    }
}