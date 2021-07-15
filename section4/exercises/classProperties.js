/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
}
var beagle = new Dog();
console.log(beagle);
var golden = new Dog();
console.log(golden);
// Prompt 2: Snack
class Snack {
}
var doritos = new Snack();
console.log(doritos);
var twinkies = new Snack();
console.log(twinkies);
// Prompt 3: Shirt
class Shirt {
}
var tShirt = new Shirt();
console.log(tShirt);
var sweater = new Shirt();
console.log(sweater);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Canine {
  constructor() {
    this.eyes = 2;
    this.sound = "bark";
    this.legs = 4;
  }
}
var husky = new Canine();
console.log(husky);
// Prompt 2: Snack
class Food {
  constructor() {
    this.taste = "yummy";
    this.calories = 700;
    this.healthy = false;
  }
}
var twizzlers = new Food();
console.log(twizzlers);
// Prompt 3: Shirt
class Garment{
  constructor() {
    this.material = "fabric";
    this.use = "clothing";
    this.color = "black";
  }
}
var blouse = new Garment;
console.log(blouse);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Pooch {
  constructor(size, color, age) {
    this.size = size;
    this.color = color;
    this.age = age;
  }
}
var malmut = new Pooch("large", "white", 2);
console.log(malmut);
var newfoundland = new Pooch("large", "black", 12);
console.log(newfoundland);
// Prompt 2: Snack
class Treat {
  constructor(type, calories, quantity) {
    this.type = type;
    this.calories = calories;
    this.number = quantity;
  }
}
var muffins = new Treat("sweet", 440, 2);
console.log(muffins);
var chips = new Treat("salty", 300, 12);
console.log(chips);
// Prompt 3: Shirt
class Tunic {
  constructor(color, season, material) {
    this.color = color;
    this.season = season;
    this.material = material;
  }
}
var winterTunic = new Tunic("black", "winter", "wool");
console.log(winterTunic);
var summerTunic = new Tunic("white", "summer", "linen");
console.log(summerTunic);
