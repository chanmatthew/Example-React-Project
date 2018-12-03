// const Color = require('color');
import Color from "color";

import Dog from './lib/dog';
import Cat1, { petCat } from './lib/cat';
import { join, split } from './lib/str';

let shibuInu = new Dog('Shiba Inu');
let tabby = new Cat1('Tabby');

console.log(join(["a", "b", "c"]));
console.log(split("abc"));

petCat();

shibuInu.walk();
tabby.sleep();

let hasColor = Color({ r: 0, g: 0, b: 0 }).hex();

console.log(hasColor);

fetch("google.com");
