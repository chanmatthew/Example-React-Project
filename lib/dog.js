class Dog {
  constructor(breed) {
    this.breed = breed;
  }

  walk() {
    console.log(`${this.breed} Dog has walked 20 km.`);
  }
}

export default Dog;