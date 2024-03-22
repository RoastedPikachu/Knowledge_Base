// Good pattern

class Attacker {
    attack() {

    }
}

class Reloader {
    reload() {

    }
}

class Knife {
    attacker;
    
    constructor() {
        this.attacker = new Attacker();
    }
}

// Antipattern

class Pistol {
    attacker;
    reloader;

    constructor() {
        this.attacker = new Attacker();
        this.reloader = new Reloader();
    }
}

class Weapon {
    attack() {

    }
    reload() {

    }
}

class MachineGun extends Weapon {

}

class Sword extends Weapon {
    reload() {
        return false;
    }
}

