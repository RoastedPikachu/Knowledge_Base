// Good pattern

class Developer {
    eat() {

    }
    sleep() {

    }
    writeCode() {

    }
}

class FrontendDeveloper extends Developer {
    learn() {

    }
}

class BackendDeveloper extends Developer {
    learnSQL() {

    }
}

// Antipattern

class MobileDeveloper extends Developer {
    useMacbook() {

    }
    writeCode() {
        return false;
    }
}