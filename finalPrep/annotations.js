// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear - returns an object that uses the parameters passed in
function buildABear(name, age, fur, clothes, specialPower) {
  //new string with name parameter passed in via interpolation
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //new array with name, and age
  var demographics = [name, age];
  //new string with specialPower concatenated in
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  var builtBear = {
    basicInfo: demographics, // array of [name, age]
    clothes: clothes, //function parameter
    exterior: fur, // function parameter
    cost: 49.99,
    //array including already defined strings
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };

  return builtBear //return the object defined above
}
//function with arguments passed in
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz - logs each number from 0 to range parameter, but replaces
//numbers evenly divisible by num1 with fizz, num2 with buzz and both num1 and
//num2 with fizzbuzz
function fizzBuzz(num1, num2, range) {
  //number of loop iterations = range, with counter var (i) starting at 0
  for (var i = 0; i <= range; i++) {
    //if the the counter var (i) has no remainder with num1 and num2, log fizzbuzz
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      //if counter has no remainder with num1, but not num2, log fizz
    } else if (i % num1 === 0) {
      console.log('fizz');
      //if counter has no remainder with num2, but not num1, log buzz
    } else if (i % num2 === 0) {
      console.log('buzz');
      //if counter isn't even divisible by either num1 or num2, log counter
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
