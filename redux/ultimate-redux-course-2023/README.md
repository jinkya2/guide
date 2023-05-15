## Section 1 [Introduction]

## What is Redux?

- State management library for javaScript Applications
- Redux is used to manage the data or state of complex JavaScript applications.
- Redux have store as database for frontend.
- Within multipple state management tolls like flux, MobX, x-state; Redux is most popular and widely used.
- Redux can be used with React, Angular or even javaScript
- Pros

  - Centralize application state
  - Data-flow transparent
  - Easily debug app with debugging tools
  - Preserve the page state.
- Cons

  - Very complex as per some engineer
  - Write a lot of boiler plate code
  - But the traditional boilerplate is solved by modern tools like redux toolkit.

## Why we need Redux?

- When to use Redux?
  - Complex User Interface in terms of data like facebook, amazon
  - Data flow is complex
- When you should NOT use Redux?
  - Small or medium size app
  - Simple UI ans static data
  - Dont just use any tools because they are popular.
  - Dan Abramov, creator of Redux, wrote blog, "You might not need Redux"
- Refer `/section1-resource/redux-starter`
  - Using webpack
    - Webpack is the bundler to bundle our JavaScript code in one file and then link with our Browser.
    - We can write our JavaScrip code in multiple files by using webpack

## Section 2 [JavaScript Functional Programming]

- Function basics
  - Functions basics
  - Higher Order Functions
  - Composition
  - Pipe
  - Currying
  - Pure Functions
  - Immutability
  - Objects and Arrays
- What is functional programming
  - One of programming paradigm(the method or a set of rules to tructure our code and to solve a problem)
  - Different Programming Paradigms
    - ProceduralProgramming
    - Logical Programming
    - FUnctional Programming
    - Object Oriented Programming
  - Functional Programming
    - Invented by John Mcarthy in 1950
    - Become popular in last few years
    - Break down big problem into small functions to solve them effectively
    - More readable code
    - More reusable code
    - Easier to debug
    - Languages like Haskell and Erlang are secifically defined for functional programming. JavaScript was not designed specifically for functional programming but JavaScript is multi paradigms language. It supports OOPS and functional programming both.
- Basics of functions
  - In javascript, we treat function as any other variable. Assign, pass or return. Thus js functions are known as first class functions.
  - ```javascript
    function greetings() {
    	return "Hello World";
    }

    function printMessage(anFunction) {
    	console.log(anFunction()));
    }
    ```
  - 
- Higher Order Functions
  - Function which takes function as a parameter or which returns the function or both. Eg _ setTimeout(()=>{}})), map, filter, reduce etc.
- Function Composition

## Section 3 [Basics of Redux (Fundamentals)]

## Section 4 [Redux Debugginh]

## Section 5 [Master Redux Toolkit]

## Section 6 [Middleware in Redux]

## Section 7 [Calling API with Redux]

## Section 8 [Integrate Redux with React App]
