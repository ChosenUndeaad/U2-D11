// 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
}

const person1 = new User("Jesse", "Pinkman", 30, "America");
const person2 = new User("Hunter", "Bloodborne", 24, "Yharnam");

console.log(person2);

//2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const pet1 = new Pet("Mentina", "Hanzo", "Gatto", "Europeo");
const pet2 = new Pet("Luna", "Hanzo", "Gatto", "Europeo");
const pet3 = new Pet("Sam", "Alessandro", "Cane", "Pinscher");

console.log(pet1);

console.log(pet1.hasSameOwner(pet2));
console.log(pet1.hasSameOwner(pet3));
