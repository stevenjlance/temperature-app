# Temperature App

![](https://media.giphy.com/media/l1KXrj90cEkiz5Af6/giphy.gif)

We all know that we have our own personal preferences for how hot or cold we want room to be. You are going to be designing an app that allows you to increase or decrease the temperature based on your personal preference.

## GOAL

When the user clicks the up arrow, the temperature should go up and when the user clicks the down arrow the temperature should go down. The screen should also update with the new temperature in both Fahrenheit and Celsius.
![](https://media.giphy.com/media/SS8ZhPFnz7Lm6t5q3Y/giphy.gif)
### TASKS

---

For today's lab you should do the following:

1. On `index.html`, connect the `script.js` file.
2. Declare a variable called `var temp` and set it equal to an initial temperature.
3. Using `document.querySelector()`, select for the the up and down arrow.
4. Using `.addEventListener`, get the console to print "clicked!" when the up or down arrow are clicked.
5. Update the temperature variable you declared in step 2 using `+=` or `-=` everytime the up or down arrow are clicked. Print the new temperature to the console.
6. Using ES6 templateing `${}` or concatination and `innerHTML` update the Fahrenheit temperature on the screen.
7. **CHALLENGE**: Currently, the temperature is listed only in Fahrenheit, but you want to also display the temperature in Celsius so that it can be used in countries besides the United States. To convert between the two temperature scales we have the following equations:

![](https://cdn.glitch.com/9a177b0d-9f8c-4449-a379-62b52e03c78d%2Fconversion.jpeg?v=1592860691230)

**CHALLENGE #1**: Get the correct Celsius temperture to print to the screen in addition to the correct Fahrenheit temperature. It is likely you will need to declare some new variables and set new `document.querySelector()` for the Celsius value.

**CHALLENGE #2**: Use `Math.round()` to get only a whole number to print to the screen (it is likely that a large decimal number initially prints when you get the Celsius conversion to work).
