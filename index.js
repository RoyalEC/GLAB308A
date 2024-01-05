const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
  },
};

adventurer.companion.companion = {
  name: "Frank",
  type: "Flea",
  belongings: ["small hat", "sunglasses"],
};

adventurer.roll = function (mod = 0) {
  const result = Math.floor(Math.random() * 20) + 1 + mod;
  console.log("${this.name} rolled a ${result}.");
};

adventurer.inventory.forEach((item) => {
  console.log(item);
});

console.log(adventurer.roll);

class Adventurer {
  constructor(name, health, inventory) {
    this.name = name;
    this.health = health;
    this.inventory = inventory;
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log("${this.name} rolled a ${result}.");
  }
}
const robin = new Adventurer("Robin", 10, ["sword", "potion", "artifact"]);

class Companion {
  constructor(name, type, belongings) {
    this.name = name;
    this.type = type;
    this.belongings = belongings;
  }
}

robin.companion = new Companion("Leo", "Cat", []);
robin.companion.companion = new Companion("Frank", "Flea", [
  "small hat",
  "sunglasses",
]);

robin.roll();
console.log(robin);

class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
    this.stamina = 100; // New property
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  rest() {
    console.log(`${this.name} is taking a rest.`);
    this.stamina = 100; // Restore stamina
  }

  // Additional method specific to adventurer
  trade(item) {
    console.log(`${this.name} is trading ${item}.`);
    // Implement trade logic
  }
}
class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
    this.loyalty = 100; // A loyalty level
  }

  assist() {
    console.log(`${this.name} is assisting.`);
    // Implement assist logic
  }

  cheer() {
    console.log(`${this.name} is cheering for encouragement.`);
    // Affect adventurer's morale or stamina
  }
}
const robin = new Adventurer("Robin", "Scout");
robin.scout();
robin.rest();
robin.trade("artifact");

const leo = new Companion("Leo", "Cat");
leo.assist();
leo.cheer();

class Character {
  static MAX_HEALTH = 100;
  // existing constructor and methods...
}
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];

  constructor(name, role) {
    super(name);
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(
        `Invalid role. Valid roles are: ${Adventurer.ROLES.join(", ")}`
      );
    }
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
    // rest of the constructor...
  }
  // existing methods...
}
