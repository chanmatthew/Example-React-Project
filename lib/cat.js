class Cat {
  constructor(breed) {
    this.breed = breed;
  }

  sleep() {
    console.log(`${this.breed} Cat has slept for 20 hours.`);
    return 1;
  }
}

export default Cat;

export const petCat = () => {
  console.log("Petting a cat");
};
