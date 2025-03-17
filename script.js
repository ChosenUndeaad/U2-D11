// 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  higherNumber(_person1, _person2) {
    if (_person1.age > _person2.age) {
      console.log(`${_person1.firstName} is older than ${_person2.firstName}`);
    } else if (_person1.age < _person2.age) {
      console.log(`${_person2.firstName} is older than ${_person1.firstName}`);
    } else {
      console.log(
        `${_person1.firstName} and ${_person2.firstName} are the same age`
      );
    }
  }
}

const user1 = new User("Jesse", "Pinkman", 30, "America");
const user2 = new User("Hunter", "Bloodborne", 24, "Yharnam");

user1.higherNumber(user1, user2);

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
