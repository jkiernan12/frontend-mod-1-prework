## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?


2. What are the data types you learned about in this section? In your own words, define each.
+ **String**: A collection of letters, numbers, emojis and/or characters. Single or double quotes typically indicate a string.
+ **Number**: A numeric value that can be decimal (floating point), integer, negative, positive. Quotes aren't used around numbers.
+ **Boolean**: A true or false value, typical the product of a comparison. For example, 2 == 4 is a *false* Boolean.

3. How would you log the string `"Hello World!"` to the console?

`console.log("Hello World!");`

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

```javascript
// The double slash is for single line comments
/* The slash and
asterisk
is for
multi-line code */

//Comments help clarify the purpose of code, or the rationale behind code decisions.
//They can also be used to comment out code you are testing.

```
5. In your own words, what is a variable? How would you explain it to a 5 year old?

Hello young person! I'm glad you're interested in programming! A variable is a make-believe name you give something, but the name doesn't have to be permanent. You can change what you give the name, or change the  quantity/quality of the named thing. Variables makes it easier to read/write code, because you no longer have to write lengthy bits of data or expressions.

6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

I'm a YouTube fan -- I have a feeling it takes a few variables to run that site. When you're viewing a video, the page layout is generally the same. All the generic components on the page are likely variables:

+ Video Title: a string
+ Number of video views: a number
+ Video publicity (public, vs private/unlisted): Boolean ie something like publicVideo = true;

7. In your own words, explain what concatenation is.

Concatenation is the combination of various values that is then returned as a string. Various data types and variables can be used. The + operator is used to combine raw values and/or variables.

8. Think of a site or app you use frequently. Where do you think the developers used concatention?

Referring back to YouTube, anytime we look at video views, it's expressed as `585,390 views`.
This is probably concatenation (or interpolation): `videoViews + "views"`

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

Would there ever actually be legitimate reason to use comparison operators on strings, especially considering they AREN'T comparing them alphabetically (ie you wouldn't be able to use comparison to do a alphabetic sort)? It seems strange to me that comparison would be allowed, since I can't see a use for it. Just curious!
