import Cat from "../lib/cat";

test("Cat.sleep", () => {
  let siameseCat = new Cat("siamese");
  expect(siameseCat.sleep()).toBe(1);
});
