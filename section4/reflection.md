## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

    I thought the Pomodoro technique helped me sustain focus for a longer period of time, but I needed to vary the length of the focus period depending on my attention levels. Some days, I'm just able to focus for much longer periods of time, so I set a longer focus period. Other days, I'm very distracted, so I set a shorter focus period.
1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

    The key for me was to vary the length of the Pomodoro and focus period duration depending on how I was feeling that day, and depending on the topic I was working on. Generally, I could focus on the technical topics longer, but the soft skill section required shorter focus periods. I found my predictions and the section predictions were somewhat inaccurate. The technical sections typically took less time, while the soft skill section took a little more time. I can see how it would be really difficult to assess time spent on something, especially when you think about how much a few difficult to answer questions can slow you down.
1. What is an Object, and how is it different from an Array in Javascript?

  An object is a list (which is similar to an array), but the list is of key/value pairs, which are able to be changed. Complex data can be stored in an object because of the mutability of the key/value pairs.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class

    An array: There is a single datapoint we're capturing for every element (name). If we were looking for a profile on each student in class, an object array might be better
  * List of states and their capitals

    An object: With two data points, it makes sense to use an object for the country, where every state is a key, and its capitol is a value.
  * List of things to pack for vacation

    An array: Again, this is just a simple list with a singular data point, the name of the item to be packed.
  * Names of all the Instagram accounts I follow

    An array: Again, it's just a list of names
  * List of student names and their cohort

    An object: We have a list of elements (students), and each element has a specific value (a cohort), so an object makes sense here.

  * Ingredients and amount of each ingredient to bake a cake
    An object: Again, we have two pieces of data -- the ingredient (key), and a value (quantity)
  * All my favorite restaurants

    An array: Again this is just a list of names without data attached to each restaurant.
1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?
  I'm on Google Maps looking for a restaurant -- each of those restaurant profiles could be represented by an object. Here's an idea of what a profile might look like:
  ```javascript
var restaurantProfile = {
  name: Taco Bell,
  rating: 3.4,
  cost: 1,
  type: "Fast Food"
  phone: "555-1234",
  website: "www.tacobell.com"
  reviews: ["Great food", "It's always too busy.","I wish they the limited edition Crunch Wrap"]  
}
  ```
1. What questions do you still have about classes and/or Objects?

    An array can be a value within a key value pair of an object -- can another object be a value of a key/value pair in an object?
