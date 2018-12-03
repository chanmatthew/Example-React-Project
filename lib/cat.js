class Cat {
  constructor(breed) {
    this.breed = breed;
  }

  sleep() {
    console.log(`${this.breed} Cat has slept for 20 hours.`);
  }
}

export default Cat;

export const petCat = () => {
  console.log("Petting a cat");
}