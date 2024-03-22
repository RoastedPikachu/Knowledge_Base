// Antipattern Open/Closed principle violation
class Hero {
    name: string;
    weapon: Weapon;

    constructor(name: string, weapon: Weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    changeWeapon(weapon: Weapon) {
        this.weapon = weapon;
    }

    attack() {
        if(this.weapon.type == "sword") {
            console.log("Attack with sword");
        } else {
            console.log("Attack with crossbow");
        }
    }
}

// Good Pattern
class Weapon {
    type: string;
    damage: number;
    range: number;

    constructor(type: string, damage: number, range: number) {
         this.type = type;
         this.damage = damage;
         this.range = range;
    }
}

class Character {
    name: string;
    weapon: Weapon;

    constructor(name: string, weapon: Weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    changeWeapon(weapon: Weapon) {
        this.weapon = weapon;
    }
}

const sword = new Weapon("sword", 20, 3);
const character = new Character("Warrior", sword);

class Sword extends Weapon {
    attack() {

    }
}

class Crossbow extends Weapon {
    attack() {

    }
}