// Good pattern

interface Repository {
    getAll: () => any[];
    getOne: () => Object;
    add: () => void;
}

class Store implements Repository {
    repo: Repository;

    constructor(repo: Repository) {
        this.repo = repo;
    }

    getAll() {
        return [] as any[];
    }
    getOne() {
        return {};
    }
    add() {
    }
}

const localStore = new Storage();

// Antipattern "Dependency Injection fallacy"

class SomeStore {
    setItem() {

    }
    getItem() {

    }
    getAllItems() {

    }
}

class DBStore extends SomeStore {
    addItem() {

    }
    getItem() {

    }
    getAllItems() {

    }
}