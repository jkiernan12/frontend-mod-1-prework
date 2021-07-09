## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
  I'm definitely inclined to wait to ask questions. I really enjoy the process of figuring out something myself, which can be a strength in moderation, but problematic if I devote too much time to figuring out a solution. Going through Turing I'm going to make an effort to only spend that 20-30 minutes on a problem before reaching out for help (if I don't make progress).

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?
  GREAT! Seriously, I think the most effective form of learning is when you're motivated intrinsically to find a solution. Following a list of instructions can be useful in certain scenarios, but generally, a healthy balance of external guidance and independent research/discovery/problem solving is best for deeper learning. I can't say this process makes me too *uncomfortable*, since I (and probably most other folks out there), are pretty acclimated to self-led research and problem solving.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
  A conditional statement evaluates something and executes one task if it's true, or another task (including additional conditional statements) if it's false.

  In daily life:
  ```javascript
var dirtyDishes = true;

if (dirtyDishes === true) {
  cleanDishes();
} else {
  sitBackAndRelax();
}
  ```

  On just about any website these days:
  ```javascript
  var savedCookiePreferences = false;

  if (savedCookiePreferences === false) {
    annoyUserWithCookieAlert();
  } else {
    leaveThemAlone();
  }
  ```

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
  You use the AND and OR logical operators (&&, ||) between your conditions. The program reads each condition and evaluates it for true or false. For &&, all conditions need to be true to evaluate the entire expression as true, otherwise it's false. For ||, all conditions need to be false to evaluate the expression as false, otherwise it's evaluated as true.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
  If you want to make sure that two conditions are met, use that && logical operator between them. If you want to make sure that at least one condition is met, use the || logical operator.

1. What questions do you still have about `if` statements and/or functions?
  What happens when we combine logical operators? In other words, if I have a statement like this:
  ```javascript
  if (true && false || false || true) }{
    console.log("This was true?");
  }
  ```
  I'm assuming it would just be read left to right, with each comparison being 'calculated' as it is read. In other words `(true && false || false || true)` would become `(false || false || true)` which would ultimately result in `true`? I'm not sure if that rationale holds up (or if this is a realistic use of logical operators). Just curious! 
