Becoming a 10x learner

- being distracted is a natural thing, which is good for human to react to uncertainity so dont be tensed for this
- what you can do is try to focus properly for few minutes, then take a break and then focus again
- whether make small progress but beign consistent is the most important thing

1. Try to focus for few minutes, then take a break and recall all the things that you learned
2. If lost, then comeback and try again to focus
3. Learn to focus, by some of the exercise like reading, focusing on a point for few minutes
4. Having a goal is must. Like if you are learning something, why are you learning and are really going closer to your goal as you progress.

# HTML

```HTML
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <a target="_blank" href="https://google.com">Link to a new page</a>
  </body>
</html>

```

Why tags are important and use different tags when we can do all the things just by using 2 tags div and p.

- Its important to use different tags to improve SEO, for example when we use h1, it show that text is important or considered as topics, h2 for sub topics.
- Another example is for footer, below example demonstrate a better way to write good footer.

  ```html
  <footer>
    <p>near xyz, XYZ city - 12345</p>
  </footer>

  <!-- better way to write -->
  <footer>
    <address>near xyz, XYZ city - 12345</address>
  </footer>
  ```

#### Semantic HTML

Semantic HTML uses meaningful tags that describe the purpose of content. Common semantic elements include:

```html
<header>
  : Defines a header section.
  <nav>
    : Defines a navigation section.
    <main>
      : Represents the main content.
      <footer>
        : Represents a footer section.
        <article>
          : Represents a standalone piece of content.
          <section>
            : Groups related content together. ### CSS ### Extras
          </section>
        </article>
      </footer>
    </main>
  </nav>
</header>
```

# CSS

## Flexbox Essentials

- **Main Axis**: Horizontal (by default).
- **Cross Axis**: Vertical (by default).

### Alignment Properties

- **Justify-content**: Aligns items along the main axis.
- **Align-items**: Aligns items along the cross axis.
  - Common values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

#### Other Flexbox Properties

- **Align-content**: Aligns multi-line flex containers along the cross axis.
- **Gap, Row-gap, Column-gap**: Defines space between items.

##### Flex-Wrap & Responsiveness

- **Flex-wrap**: Wraps items to the next line when space is reduced, keeping item widths intact (responsive break).

##### Flex-Grow & Flex-Shrink

- **Flex-grow**: Expands items to fill available space.
  - Works well with `min-width` and `max-width` for responsive scaling.
- **Flex-shrink**: Shrinks items when space is tight.

##### Miscellaneous

- **Align-self**: Aligns a single item independently of others.
- **`margin-right: auto;`**: Pushes the element to the far left, using available space.

### Grid

- `grid-template-columns` & `grid-template-rows`

  - Defines the number and size of columns/rows.
  - Example: `grid-template-columns: repeat(3, 1fr);`

- `grid-column-gap` / `grid-row-gap` / `gap`

  - Defines space between columns/rows. Use `gap` for shorthand.
  - Example: `gap: 20px;`

- `grid-template-areas`
  - Defines a grid template using named areas.
  - Example:
    ```css
    grid-template-areas:
      'header header header'
      'sidebar main main'
      'footer footer footer';
    ```

#### Item Properties

- `grid-column` / `grid-row`

  - Specifies how many columns/rows a grid item should span.
  - Example: `grid-column: 1 / 3;`

- `grid-area`

  - Places an item in a named grid area.
  - Example: `grid-area: header;`

- `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));` This will auto maintain the number of columns as per the width.
- `grid-template-columns: repeat(auto-fill, 250px)`

# Styled Components

- `styled-components` is a popular library for creating styled components in React.
- It allows you to create reusable and styled components with ease.
- We write styles for the element in css but a bit in a different mannner

```javascript
const H1 = styled.h1`
  color: red;
  font-size: 2rem;
`;

<H1>Styled Components</H1>;
```

- Since we are writing the styles in back tick, we can write js as well like:

```javascript
const H1 = styled.h1`
  color: red;
  font-size: 2rem;
  background-color: ${12 > 10 ? 'green' : 'red'};
`;
```

## Writing style as a variable

```javascript
const styles = css`
  color: red;
`;

const Heading = styled.h1`${styles}`
  background-color: grey;
  ${styles};
`
```

## Components for styling

- we have two options for proprs
- `types` - this will act as normal props and we can do styling based on this but this is not effecient
- `as` - this will treat the props as real HTML element

```javascript
// using types
<Heading type="h1">Styled Components</Heading>

// using as
<Heading as="h1">Styled Components</Heading>


// -----------

const Heading = styled.h1`
  ${props => props.type === 'h1' && css`
    font-size: 3rem;
  `}

  ${props => props.type === 'h2' && css`
    font-size: 2rem;
  `}


  color: red;
`;

```

# Javascript

## Global Execution Context

## How js works.

## ES5, ES6, ESNext

## Primitive Types

- Primitive types are the most basic data types in programming, representing single, immutable values.
- They are not objects and do not have methods.

## Stack and heap memory

- `Stack memory` - variable get copy of value
- `Heap memory` - variable get reference as copy

- Value Types and Reference Types

  - Primitive are copied by their value
  - Objects are copied by their reference
  - So when we pass the primitive in functions their value will not be changed, as it will be copied by their value but for object it will be copied by reference.

  ```Javascript
  let a = 12;
  function abc(number) {
  number++;
  }

  abc(a);
   (a); // 12

  const obj = [12, 3, 4];

  function array(arr) {
  arr.push(123);
  }
  array(obj);
   (obj); // [12, 3, 4, 123]
  ```

## `Execution Context` (Call Stack, Execution context stack, program stack, control stack, runtime stack, machine stack)

Execution context is a concept that represents the environment in which Js code is executed

1. Memory creation
   - first it will assign the memory to all variable as undefined and for function it stores all the code as it is
2. Code execution
   - In the code execution it will actually run the code and if there is any function call then it will create another execution context for function which is called as `function execution context` which will again have the same thing as global execution context. FEC will be deleted after the function call

### Memory Creation

1. Javascript stores the variables as undefined and for function

- `==` with this we just check the value, Js auto type conversion can change the output as well. Like 2 == "2" -> true
- `Type coersion` can be done while checking two variables (==, >, <,)
  - implicit coersion - auto coversion. It happens when we are `comparing two numbers` or when we are `adding two variable one is number and other is string`, then the resultant will be the sum of those two numbers in String, `truthy or falsy values converting to 1 or 0`
  - explicit coersion - manual converison with the built in methods
- `===` with this we check both the value and type
- `Falsy Values` - false, 0, "", null, undefined, NaN, -0

## Type Coersion and Type Conversion

- `Type Conversion` - When we manually convert the types of data in js
- `Type Coersion` - When the js changes the type automatically.

## Expression vs. Statement

`Expression`: A piece of code that evaluates to a value (e.g., 2 + 2, "Hello", Math.max(10, 20)).
`Statement`: A piece of code that performs an action (e.g., if, for, function, let x = 5;).

## Hoisting

- Hoisting is JavaScript's default behavior of moving declarations to the top of their scope.

### Key Points

1. **Variable Hoisting**

   - `var` declarations are hoisted and initialized with `undefined`
   - `let` and `const` are hoisted but not initialized (Temporal Dead Zone)

2. **Function Hoisting**

   - Function declarations are fully hoisted
   - Function expressions are not hoisted (`const sum = a, b => a+b`)

3. **Order of Precedence**
   - Function declarations are hoisted before variable declarations

### Examples

#### Variable Hoisting

```javascript
x; // Output: undefined
var x = 5;

y; // ReferenceError
let y = 10;
```

## TDZ (Temporal Dead Zone)

- TDZ is a period where the variable exists(due to hoisting) but cannot be accessed becuase it has not been initialised
- temporal dead zone starts with block scope and ends when encountered with variable declaration.

## Var vs Let vs Const

- var is function scoped, let & const are block scoped
- all three are hoisted, but only var get initialised with undefined, let and const are not defined when hoisted. So we get an error "You can't access `b` before initialization
- `initilising without declaring` - `name = "salman"` -> this will declare the variable as a global variable, even if declared inside a function.
  - var has also similar property, but var when initilised inside a function then it is not a global variable.

## Lexical Scoping

## Closures

**`Closure`** is function along with its lexical environment.

### Key Points

- **Encapsulation**: Closures allow private variables in JavaScript by wrapping data inside functions.
- **Persistent State**: Variables in closures persist, even when the outer function has returned.
- **Scope Chain**: The inner function maintains a reference to the variables in the outer scope.

### Uses

- Modules Design Pattern
- Currying
- functions like once
- memoize
- maintaining state in async world
- setTimeouts
- Iterators
- and many more

## Functions

```javascript
function sum(num1, num2, ...num3) {
  // num3 will have all the remaining values in the form of array - [3,4,5,6,7,8]
}

sum(1, 2, 3, 4, 5, 6, 7, 8);
```

- `this` give the current context, when used inside the functions it will all the values, etc

## Arrow functions

- When using {}, return keyword is required
- () - no return required
-

### When not to use Arrow functions:

1. Object methods
2. prototypes
3. Constructors
4. Event handlers

## IIFE

An **IIFE** is a function that is **executed immediately** after being defined. It creates a new scope to avoid polluting the global scope.

### Syntax

```javascript
(function () {
  // Code inside IIFE
})();
```

### Use Cases

1. **Avoid Global Variable Pollution**
   Prevents variables from leaking into the global scope by encapsulating them in a local scope.

2. **Encapsulation of Code**
   Keeps variables and functions private, avoiding naming conflicts and ensuring that the code remains isolated.

3. **Safe Initialization**
   Executes initialization code that only needs to run once, such as configuration settings or setting up state.

4. **Modular Code**
   Allows for the creation of self-contained modules of code that do not interfere with other parts of the application.

5. **Event-Driven Code**
   Used to create isolated environments for event listeners, preventing variables from affecting other event handlers.

6. **Avoid Variable Hoisting Issues**
   Since IIFEs are executed immediately, they help avoid issues with variable hoisting, ensuring variables are not misused before they are defined.

## Higher Order Functions

**Higher-Order Function** is a function that either:

1. Takes one or more functions as arguments, or
2. Returns a function as its result.

### Common Use Cases

1. **Callbacks**: Passing a function as an argument to another function, e.g., in event handling or asynchronous programming.
2. **Function Composition**: Creating new functions by combining other functions.
3. **Array Methods**: Methods like `.map()`, `.filter()`, and `.reduce()` are examples of higher-order functions.

## Callback functions

- A callback function is a function that is passed as an argument to another function and is called at a later point in time.
- It is often used in asynchronous programming to handle the result of an asynchronous operation.

## Pure Functoions

1. Always `returns the same output`, for a given input. Not dependent on the external variables to return the output.
2. `No side-effects` -

### Example of a Pure Function:

```javascript
function add(a, b) {
  return a + b;
}
```

In this example:

- **Deterministic**: For inputs `2` and `3`, the output will always be `5`.
- **No Side Effects**: The function only computes and returns a value without altering any external state.

**Note**: _If a pure function calls a pure function this isn’t a side effect and the calling function is still pure._

## Side Effects

A **side effect** occurs when a function interacts with external states or has observable effects outside of returning a value. Common examples of side effects include:

- Modifying variables or objects outside the function scope.
- Writing or reading from external resources (e.g., databases, files).
- Manipulating the DOM or console logging.
- Triggering network requests.

### Example of a Function with Side Effects:

```javascript
let count = 0;

function increment() {
  count += 1;
  return count;
}
```

In this example:

- **Non-deterministic**: The result depends on how many times `increment()` is called.
- **Side Effect**: The global variable `count` is being modified.

## Impure functions

- DOM manipulation
- Math.random()
- new Date()
- User input
- File IO
- Network Request
-

## Mutation

**State mutation** occurs when the state (e.g., variables, objects, or arrays) in a program is directly modified or altered. In JavaScript, this can happen when you change the values of objects or arrays in place rather than creating a new version of that data.

### Example of State Mutation:

```javascript
let state = { count: 0 };

function incrementCount() {
  state.count += 1; // Mutating the state
}

incrementCount();
state.count; // Output: 1
```

In this example, the `state` object is directly modified within the `incrementCount()` function.

## Problems with State Mutation

State mutation can lead to several issues, including:

- **Unpredictability**: The state can be modified by different parts of your code, potentially leading to unpredictable outcomes.
- **Complex Testing**: Functions that mutate state are more difficult to test as they change external data.
- **Concurrency Issues**: When dealing with asynchronous programming, state mutation can cause race conditions and inconsistent states.

### Example of Asynchronous Mutation Issues:

```javascript
let state = { count: 0 };

function asyncIncrement() {
  setTimeout(() => {
    state.count += 1; // Mutating state asynchronously
    state.count;
  }, 1000);
}

asyncIncrement();
asyncIncrement();
```

Here, depending on the timing, `state.count` might not behave as expected, leading to potential concurrency issues.

### Avoiding State Mutation

#### Immutability

One way to avoid mutation is by working with **immutable data structures**, where instead of changing the existing data, `you create and return a new version of the data with the necessary changes`.

### Example of Avoiding Mutation:

```javascript
let state = { count: 0 };

function incrementCount(state) {
  return { ...state, count: state.count + 1 }; // Returning a new state object
}

let newState = incrementCount(state);
newState.count; // Output: 1
state.count; // Output: 0 (Original state remains unchanged)
```

In this case, we avoid mutation by using the spread operator to create a new object with updated values, rather than changing the existing object.

## Arrays

### Array Handbook

This handbook explores various methods for manipulating arrays in JavaScript.

**Covered Methods:**

- `push()`: Adds an element to the end of the array.
- `pop()`: Removes the last element from the array.
- `shift()`: Removes the first element from the array.
- `unshift()`: Adds an element to the beginning of the array.
- `concat()`: Creates a new array by merging existing arrays.
- `forEach()`: Executes a provided function once for each array element.
- `map()`: Creates a new array with elements transformed by a provided function.
- `filter()`: Creates a new array with elements that pass a test implemented by a provided function.
- `find()`: Returns the value of the first element in the array that satisfies a provided testing function.
- `sort()`: Sorts the elements of an array in place and returns the sorted array.

## Objects

- `Singleton` - when objects are made with constructor then it's singleton objects like `Object.create`
- `Object literals` - `const obj = {}`

### Accessing Objects:

1. `dot notaion` - we can access the values of objects using dot notaion like `student.name`
2. square brackets - this can be also used to access the objects. Even this can be more useful sometime when the key is used like `"full name": "your full name"`. Then the only option by which we can access the objects is `student["full name"]`

### Dot notaion vs Square brackets

- dot notation is used when we know the property names, and can't use special characters
- sqaure brackets for accessing the properties dynamically as it accepts the expression and can use special character

### Object freeze

- `Object.freeze(student)` - it is used to stop any changes further. If anyone's trying to change the values of that object then it will not change and also no error will be thrown

### Using symbol in Object

```javascript
const studetn = {
  name: 'Random Name',
  [symbol]: 'symbol Name',
};
```

- Accessing symbol: `student[symbol]`

### Combining two objects

```Javascript
  const copiedObjects = Object.assign({}, obj1, obj2);
```

- the first object is the target object and rest are source. Using a blank object in the target will be useful in avoiding mutation.

```Javascript
  const copiedObjects = {...obj1, ...obj2};
```

- This is more easy way to combine objects

### Object.create

Create new object with the existing object

### Getting key and values

```javascript
const keys = Object.keys(obj1);
const values = Object.values(obj1);
const keyValuePairInArray = Object.entries(obj1);
```

## Looping over Objects:

```Javascript
  // iterating over keys or values
  for(const keys of Object.keys(obj)){
     (keys); // printing keys - for values just Object.values(obj)
  }

  // Iterating through the Object
const openHours = {
  Sun: { open: 12, close: 23 },
  Mon: { open: 9, close: 23 },
  Tue: { open: 9, close: 23 },
  Wed: { open: 9, close: 23 },
};

const entries = Object.entries(openHours);

for (const [day, { open, close }] of entries) {
   (`On ${day}, we open at ${open} and close at ${close}`);
}
```

## Object Destructure

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const { firstName: name, lastName, age } = person;
```

### Call method

- This method is used to borrow functions for objects. Means we can use the functions outside objects or from other objects with `this` keyword.
- `Method 1:` using functions of other objects

```javascript
const person = {
  fullName: function (city, country) {
    return `${this.firstName} ${this.lastName} from  ${city}, ${country} `;
  },
};

const person1 = {
  firstName: 'John',
  lastName: 'Doe',
};

person.fullName.call(person1, 'New York', 'USA');
```

- `Method 2:` using normal functions

```javascript
const person1 = {
  firstName: 'Samm',
  lastName: 'Rei',
};

const person2 = {
  firstName: 'John',
  lastName: 'Doe',
};

function fullName(city, country) {
  return `${this.firstName} ${this.lastName} from  ${city}, ${country}`;
}

fullName.call(person1, 'New York', 'USA');
fullName.call(person2, 'New York', 'USA');
```

### Apply method

This is similar to call method, the only difference is how we are passing the arguments. we pass the arguments as array.

```javascript
fullName.apply(person1, ['New York', 'USA']);
// we don't have to use array methods to use that elements
```

### Bind method

Bind method returns a function which we can say is attached to the object that we pass and later on we have to invoke that function

- The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value

```javascript
const details = fullName.bind(person2, 'New York', 'USA');

// now details is a new function bind to only person2, since this is a new function so when we have to use it we have invoke it
// details();
```

### Prototype Inheritance and Prototype Chain

Js attaches properties to the objects.

## Destructuring

### Object destructuring:

- The name should match with the properties of objects
- we can rename them by `objectProperties: newName`

```javascript
const obj = {
  name: 'Salman',
  address: 'New Delhi',
  hometown: 'Patna',
};

const { name, hometown } = obj;
// const { name: personName, hometown: city } = obj;
```

### Array destructuring:

- In array destructuring the index position in important

```javascript
const arr = [1, 2, 3, 4, 5];

// Destructuring the array
const [first, second, third] = arr;
```

## Rest Operator

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Destructuring the array
const [first, second, third, ...rest] = arr;
```

## Spread Operator

### Array

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const nums2 = [...nums, 9, 10, 11];
```

### Objects

Creating a copy of objects and adding properties

```javascript
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { ...obj1, hometown: 'New York', profession: 'Engineer', age: 24 };
// age will be updated to 24
```

## Reduce Method

```javascript
const totalPages = book.reduce((acc, book) => acc + book.pages, 0);
```

## Array Sorting

```javascript
const newArr = [5, 3, 7, 2, 31, 98, 90];

newArr.sort(); // this is used to sort array consists of string values, for numbers it will give wrong output as it compares the digit not the value digit

newArr.sort((a, b) => a - b);
newArr.sort((a, b) => b - a);
```

## Updating array or objects

```javascript
const updatedBooks = books.map((book) =>
  book.id === 1 ? { ...book, page: 210 } : book
);
```

## Strings

we can access the letters just like array `'str'[0]`

```Javascript
  const warning = "don't open that!";
   (warning.indexOf('t'))
   (warning.indexOf('open'))
   (warning.lastIndexOf('open'))

  // SLICE - gives a part of string
   (warning.slice(4)) // start from 4th index
   (warning.slice(4, 9)) // start from 4, end at 8
   (warning.slice(-1)) // start from the end


 (str1.trim()); // this will remove whitespaces
 (str1.toLowerCase())


const para = 'there are so many flowers in the garden, flowers look amazing';
 (a.replaceAll('flowers', 'fruits')); // replace will work only on first occurence, replace do the work as name suggest

.include("")
.startsWith("")
.endsWith("")

.split(" ") // the string will be converted to an array as space separation

.join("-") // will join the arrays separated by -
str.pasStart(25, "-"); // it will make the str length 25, fill the start with "-" in the begining of str

function maskCardNumber(cardNumber) {
  const n = cardNumber + '';
  const lastFourdigits = n.slice(-4);
  return lastFourdigits.padStart(n.length, '*');
}




```

## Sets

Set is another form of array we can say but there are majorly two differences:

1. It stores only unique values
2. It is not like index based, but LIFO just like linked list

```javascript
const newSet = new Set([1, 2, 3, 4, 5]); // iterator is required to ceate new Set
newSet.add(5); // add element at the end
newSet.delete(4); // delete any element
newSet.has(5); // chech if it has?
newSet.size;
// newSet.clear();

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 5, 4, 3, 2, 1, 2, 34, 54, 5];

const newArray = [...new Set(arr1)]; // removing duplicates from an array
```

## Maps

### Methods of Map:

- `set(key, value)`: Adds or updates the value for the given key.
- `get(key)`: Retrieves the value associated with the key.
- `has(key)`: Checks whether the key exists in the map.
- `delete(key)`: Removes the key-value pair.
- `clear()`: Removes all key-value pairs.
- `size`: Returns the number of key-value pairs.
<!-- --------------------- -->

### Introduction

The `Map` object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

## Key Features

- **Unique Keys**: Each key in a `Map` is unique.
- **Insertion Order**: Iteration happens in the order of entry insertion.
- **Any Data Type**: Keys and values can be of any data type.

## Basic Usage

### Creating a Map

```javascript
let map = new Map();
```

### Adding Entries

```javascript
map.set('key1', 'value1');
map.set('key2', 'value2');
```

### Accessing Values

```javascript
let value = map.get('key1'); // 'value1'
```

### Checking for Keys

```javascript
let hasKey = map.has('key1'); // true
```

### Removing Entries

```javascript
map.delete('key1');
```

### Iterating Over a Map

```javascript
for (let [key, value] of map) {
  key, value;
}
```

### Size of the Map

```javascript
let size = map.size; // 1
```

### Clearing the Map

```javascript
map.clear();
```

## Comparison with Objects

- **Accidental Keys**: `Map` does not contain any keys by default, whereas `Object` has a prototype with default keys.
- **Key Types**: `Map` keys can be any value, while `Object` keys must be strings or symbols.
- **Order**: `Map` maintains the order of entries, while `Object` does not guarantee order.

## Example

```javascript
let map = new Map([
  ['name', 'John'],
  ['age', 30],
]);

map.get('name'); // John
map.size; // 2
```

<!-- ----------------  FORKIFY APP  --------------- -->

- `User story` - description of the app's functionality from the user's perspective

<!-- ------------------------------- -->

## Classes:

- `static method`: it can be used to store the methods that is not related to objects of that class but to that class only. **Can only be called by the class itself not by the objects of that class**

```javascript
 class Student{
  constructor(name, id, class){
    this.name = name;
    this.id = id;
    this.class = class;
  }

  static details(){
     ("I am the class to store student details")
  }

  studentDetails(){
     (`${this.name} is a student of class ${this.class} and the roll no is ${this.id}`)
  }

 }
```

## Date Methods in JavaScript

- **Creating a Date Object:** `new Date()`
- **Getting Date Components:**
  - `getDate()`
  - `getMonth()`
  - `getFullYear()`
  - `getHours()`
  - `getMinutes()`
  - `getSeconds()`
- **Setting Date Components:**
  - `setFullYear(year)`
  - `setMonth(month)`
- **Time in Milliseconds:** `getTime()`
- **Creating a New Date:** `new Date(year, month, day)`

## JSON

- `JSON.parse` - parse data from JSON
- `JSON.stringify` - convert object into string

## Maths

## Math Methods in JavaScript

- **Rounding:**
  - `round()`
  - `ceil()`: 2.3 -> 3
  - `floor()`: 2.3 -> 2
- **Random Numbers:** `random()`
- **Maximum and Minimum:**
  - `max()`
  - `min()`
- **Exponentiation and Square Root:**
  - `pow()`
  - `sqrt()`

## Async in JavaScript

### Key Async Functions:

- **`setTimeout()`**:
  - Schedules a function to execute after a set time.
  - Example: `setTimeout(() =>  ("Hello!"), 1000);`
- **`fs.readFile()`** (Node.js):

  - Asynchronously reads a file from the filesystem.
  - Example:
    ```js
    const fs = require('fs');
    fs.readFile('file.txt', 'utf8', (err, data) => {
      if (err) throw err;
      data;
    });
    ```

- **`fetch()`**:
  - Makes asynchronous network requests, typically to get data from a server.
  - Example:
    ```js
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => data);
    ```

---

### Async Architecture:

- **Call Stack**:

  - Manages the execution of synchronous code. Functions are pushed and popped in a LIFO order.

- **Web APIs**:

  - External environments like timers, HTTP requests, etc., that handle async operations outside the call stack.

- **Callback Queue**:

  - Holds asynchronous callbacks waiting for execution. These are processed by the event loop after the call stack is empty.

- **Event Loop**:
  - Monitors the call stack and callback queue. It moves tasks from the queue to the stack when the stack is empty, ensuring async callbacks are executed.

### The async process:

1. the code will start with the call stack and run normally until any async code is there
2. When there is any async code, it will push to the web apis. Now the call stack will execute further, besides this the web apis is running side by side.
3. when web apis completed a task, it will move the callback queue. That async task will reach which is completed, no matter which starts first
4. when the stack is empty, then event loop will move the tasks from queue to stack.

## Promises

```javascript
function asyncFunc() {
  return new Promise((resolve) => {
    resolve('Hi there');
  });
}

const data = asyncFunc().then(() => data);
```

# Node JS

Node is a runtime

ecmascript, javascript, node, bun

## HTTP Server:

1. A protocol that is defined for machines to communicate
2. Specifically for websites, it is the most common way for your website's frontend to talk to its backend

# Environment Variables

process.env.PORT || 3000

# Express

# JWT

```js
// TOKENISE
var token = jwt.sign({ username: username }, jwtPassword);
return res.json({
  token,
});

// DETOKENISE
const decoded = jwt.verify(token, jwtPassword);
const username = decoded.username;
```

# React

## useEffect cleanUp

- cleanup function runs on two occasion:
  - 1. before the effect is executed again
  - 2. after a component has unmounted

### Using abortcotroller

- It stops the current fetch request when another search starts (handling race conditions)

```Javascript
const controller = new AbortController();

// connecting with fetch
const res = await fetch("http.....", {signal: controller.signal})

// usinjg in clean up function
return function(){
  controller.abort();
}

// whenever a request gets cancelled, it will treat as error, to handle that:
if (error.name !== "AbortError"){
  setError(err.message)
}

```

## Writing to local storage

```javascript
// writing
localStorage.setItem('watched', JSON.stringify([...watched, movie]));

// reading
const storedValue = localStorage.getItem('watched');
return JSON.parse(storeValue);
```

## Hooks

- built in functions that allow us to "hook" into react internals:

### Rules of hooks

1. Do not call hooks inside the conditionals, loops, nested functions or after an early return. (necessary to ensure that hooks are always called in the same order)
2. Only class hooks inside a function component or a custom hook

### Lazy Evaluation

```javascript
const [count setCount] = useState(()=>{
  localStorage.getItem('count')
});
```

## useRef

- box object with a mutable .current property that persisted across renders.
- two big use cases:
  - creating variable that stays the same across renders
  - selecting and storing DOM elements
- refs are for data that is not rendered.
- don't read or write .current in render logic

```javascript
const myRef = useRef(23);
// accessing the values
myRef.current;

// using useRef to select dom elements
const btnRef = useRef(null);
<button ref={myRef}></button>;
```

## returning a function from useEffect

- the return function will be called when the component unmounts
- some examples of that return function are: aborting a fetch request, closing a websocket, clearing a timer, restarting a timer, etc.

## Custom hooks

- allow us to reuse non-visual logic in multiple components.
- when we need to use logic that contains hooks
- one custom hooks should have one purpose, to make it reusable and portable(even across multiple projects)
- Rules:
  - needs to use one or more hooks
  - function name need to start with use
  - unlike components, can receive and return any relevant data
- ```javascript
  //the hook
  function useFetch(url) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await axios.get(url);
          const data = res.data;
          setData(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    }, []);

    return { data, error, loading };
  }

  // calling custom hook
  const { data, error, loading } = useFetch('https://api.example.com/data');
  ```

## useReducer

- stores related pieces of state in a state object
- decouples state logic from components
- reducer: pure function( no side effect) that takes current and action and returns next state
- dispatch to trigger state updates by sending an action from event handlers to the reducer
- dispatcher - who request the update
- reducer - who updates the state
- state - what needs to be updated
-

# React Router

```bash
  npm i react-router-dom
```

```javascript
// creating route
return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);


// Linking route (Using routes)
  <Link to='/'>Home</Link>
  <Link to='/about'>About</Link>


  //NAVLINK - this contains active class for styling purpose we can use them
   <NavLink to='/'>Home</NavLink>
  <NavLink to='/about'>About</NavLink>

  // NESTED ROUTES
  <Route path='/app' element={<App />} >
    <Route index element={<Home />}  />
    <Route path='/cities' element={<Cities />} />
  </Route>


  // SHOWING THE NESTED ROUTE COMPONENT
  <Outlet />

  // DYNAMIC ROUTES (Using params)
  <Route path='/app/:id' element={<App />} />

  // PARAMS - using params will require path to be declared:
  <Link to={`${id}?lat=${lat}&lon=${lon}`} />
  // using params
  const { id } = useParams();
// using query
  const [searchParams, setSearchParams] = useSearchParams();

  // getting query
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  // setting query
  setSearchParams({ lat: 213, lon: 342 });
  <Link>
```

## Programmatic Navigation

### useNavigate

- can be used to navigate programmatically like going back or going to specific route

```javascript
const navigate = useNavigate(); // use to call useHistory

navigate(-1); // this will navigate to the previous route
navigate(1); // this will navigate to the next route

navigate('/about'); // this will navigate to /about
```

### Navigate

- Use to redirect to specific route

```javascript
<Route index element={<Navigate to='cities' replace />} />
```

# Context API

## Steps

1. Create a context

```javascript
import { createContext } from 'react';

const PostContext = createContext();
```

2. Create a provider

```javascript
return (
  <PostContext.Provider value={value}>
    // provide all the values that needs to be pass down to children Postcontext
    will be the parent element
    <Component /> // under postcontext all the components will be rendered, now no
    need to pass anything
  </PostContext.Provider>
);
```

3. Consuming the values

```javascript
import { useContext } from 'react';
const { onClearPost } = useContext(PostContext);
// all the values that passed in the provider are available here
```

# Redux

- third party library to manage state

## 1. Creating store

```javascript
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
export default store;
```

## 2. Creating reducers

```javascript
export default function customerReducer(state = intialStateCustomer, action) {
  switch (action.type) {
    case 'customer/updateName':
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}
```

## 3. Creating actions

```javascript
export function updateName(fullName) {
  return {
    type: 'customer/updateName',
    payload: fullName,
  };
}
```

## 4. Dispatching actions

```javascript
const dispatch = useDispatch();
dispatch(updateName('John Doe'));
```

## 5. Using values from store

```javascript
const customerName = useSelector((state) => state.customer.fullName);
```

# Thunks (middlewares - async actions)

```javascript
import { thunk } from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(thunk));

// in the action function we return function instead of dispatch
// the return function receives dispatch and getState

export function deposit(amount, currency) {
  if (currency === 'INR') {
    return { type: 'account/deposit', payload: amount };
  }

  return async function (dispatch, getState) {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`
    );
    const data = await res.json();
    data;
    const converted = data.rates.INR;

    dispatch({ type: 'account/deposit', payload: converted });
  };
}
```

# Redux rtk

## 1. Creating stores

```javascript
import { configureStore } from '@reduxjs/toolkit';

  const store = configureStore({
    reducer{
      account : accoundReducer,
      customer : customerReducer
    }
  })

  export default store;
```

## 2. Creating slices

```javascript
const initialState = {
  balance: 0,
  loan: 0,
};

const accontSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action) {
      state.balabce = action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
      },
    },
  },
});

export const { deposit, requestLoan } = accountSlice.actions;
export default accountSlice.reducer;
```

## 3. Dispatching and using values

```javascript
const dispatch = useDispatch();
const { balance } = useSelector((state) => state.balance);
```

## 4. Thunks

```javascript
// 1. create asyncthunk
const fetchAddress = createAsyncThunk('user/fetchAddress', async function () {
  const data = await fetch('url');
});

// 2. Using in the slice, we will have to manage three states of the thunk, pending, fulfilled, rejected
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'erorr';
      });
  },
});
```

### useFetcher - fetchin without going to other routes

#### fetching data

- used to interact with loader or actions.
- fetcher has its own state while performing something. fetcher.state -> loading, idle, error

```javascript
const fethcer = useFetcher();

const data = fetcher.load('/menu');
```

#### updating data

1. create fetcher form, put all the element inside the form
   ```javascript
   return (
     <fetcher.Form>
       <button>Update data</button>
     </fetcher.Form>
   );
   ```
2. add action to the form

```javascript
export async function action({ request, params }) {
  // do what you want ot do with the data
  return null;
}
```

# React Query

- for managing remote(server) state

## features

- caching
- automatic loading and error states
- refetching to keep the state synced
- prefetcing
- easy remote mutations
- offline support

## Getting started

### 1. Define a query client

```javascript
// 1. install react query and dev tools

npm i @tanstack/react-query@4
npm i @tanstack/react-query-devtools

// 2. create query client
const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 1000 * 60 ,
  }
});

// 3. wrapping the component
return(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevTools initialIsOpen={false} />
    <App />
  </QueryClientProvider>
)

```

### 2. Using Queries

#### i. Fetching data

```javascript
const { data, isLoading, error } = useQuery({
  queryKey: ['menu'],
  queryFn: getData,
});
```

#### ii. Mutations

```javascript
const { mutate } = useMutation({
  mutationFn: (id) => updateData(id),
  onSuccess: () => {
    queryClient.invalidateQueries({
      // invalidating the cache, refetching the data
      queryKey: ['menu'], // invalidating only the menu
    });
  },
});
```

# Toast

```bash
npm i react-hot-toast
```

just put it in the parent and define styles or any other props required

```javascript
<Toaster
  position='top-center'
  gutter={12}
  containerStyle={{ margin: '8px' }}
  toastOptions={{
    success: {
      duration: 3000,
    },
    error: {
      duration: 5000,
    },
    style: {
      fontSize: '16px',
      maxWidth: '500px',
      padding: '16px 24px',
      backgroundColor: 'var(--color-grey-0)',
      color: 'var(--color-grey-700)',
    },
  }}
/>
```

```javascript
toast.success('hi there');
```

# Builing a project

## Smaller projects

1. break the desired UI into components
2. build a static verison(state less)
3. Thoink about state management + data flow

## Bulding a real world project

1. gather application requirements and features
2. Divide the application into pages
   1. think about the overall and page level UI
   2. break the sdesired UI into compoennts
   3. design and build a static version(no state yet)
3. divide the app into feature categories
   1. think about the state management + data flow
4. Decide what libraries to use(tech decisions)

# Modern Router

```javascript
const router = createBrowserRouter([
  {
    element: <AppLayout />, //applayout is consistent for all routes
    children: [
      // children conatains all the routes
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
    ],
  },
]);
// App
function App() {
  return <RouterProvider router={router} />;
}

// AppLayout
function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
```

## Fetching data in modern router:

this way the react router will start fetching the data at the same time it starts rendering the correct route.

- in the normal useEffect fetch, fetching starts after the component has rendered which will cause data loading waterfalls
-

1. create a loader

- best practise is to load the data inside the component itself.

```javascript
export async function loader() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return data;
}
```

2. providing it to the router

```javascript
{
  path: '/menu',
  element: <Menu />,
  loader: menuLoader,
}

3. consuming the data
```

```javascript
import { useLoaderData } from 'react-router-dom';
export default function Menu() {
  const menu = useLoaderData();
  return <Menu menu={menu} />;
}
```

## Error Handling in modern router

```javascript
{
  element: <AppLayout />, //applayout is consistent for all routes>
  errorElement: <Error />,
  children: [
    {
      path: '/',
      element: <Home />,
    },

  ],
}
```

in the errorElement we can provide a custom error page

<!-- Errorelement -->

```javascript
{
  const error: useRouteError();

  const errorMessage = error.data || error.message;
}
```

## Submitting forms in react router

1. create a form

```javascript
// just all the forms inside the <Form method="POST">

<Form method="POST">
<input type="text" name="fieldname">
</Form>
```

2. Create action

```javascript
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data;
  return null;
}
```

3. finally import this into router

```javascript
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },

```

4. If you want to use the data returned from the action, you can use useActionData hook. This works only inside the same component for the action is made.

## React Query

```javascript
npm i @tanstack/react-query
```

# Axios

## get request

```javascript
const response = await axios.get('<https://api.example.com/data>');
console.log(response.data);
```

## post request

```javascript
async function postData() {
  const url = '<https://api.example.com/postData>';
  const dataToSend = {
    key1: 'value1',
    key2: 'value2',
  };

  try {
    const response = await axios.post(url, dataToSend);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## patch request

```javascript
axios
  .patch('https://jsonplaceholder.typicode.com/posts/1', {}) // Empty body
  .then((response) => {
    console.log('PATCH Response:', response.data);
  })
  .catch((error) => {
    console.error('PATCH Error:', error);
  });
```

## delete request

```javascript
const deleteResponse = await axios.delete(
  'https://jsonplaceholder.typicode.com/posts/1'
);
```

# Named and default exports

- one file can have only one default export while can have many named export
- named export can be only use at the time of declaration, if we have to use that later then we can use like `export {variable}`
- export default can be declared anywhere
- we can rename the default export directly
- renaming of named export can be done only by using as - `import {add as sum}`

# Typescript

- Data types: `string, number, boolean, any, null`
- type inference - ts auto decide what will be the return type

## Creating a typescript environment

```bash
tsc --init // creates a simple tsconfig.json

// all the converted js file should be in dist folder -

// we can write the ts file in src

```

`outDir: './dist'/`
`rootDir: './src'/`

```javascript
function sumOf3(c: number, fn: (a: number, b: number) => number): number {
  const d: number = fn(1, 2);
  return c + d;
}
```

## Types

```typescript
  type cardDate = {
    cardDate = string
  }

  type cardNumber ={
    cardNumber = number
  }

  // this will combine the value of both and add the rest
  type cardDetails = cardDate & cardNumber & {
    cvv: number
  }
```

## Interface

- Setting the type for objects for reusability

```javascript
interface User {
  username: string;
  fullName: string;
  age: number;
  email?: string; //this will be optional
}
```

```javascript
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}
```

- `extends` is used to extend the property of other interface

//implements: this will make sure that class must have the same types of properties that a person has,

```typescript
class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    `${phrase} ${this.name}`;
  }
}
```

## Array

```typescript
const a: number[] = [];
const b: Array<number> = [];

//to have multiple types of variables in array
const arr: (string | number)[] = [1, 'one'];
```

## Unions

```typescript
let user: string | number;

user = 'salman';
user = 12;
```

## Tuples

- to restrict the order of types and lenght as well

```typescript
let tUser: [string, number, boolean];
```

## Enums

- enums set input restriction

```typescript
// way 1
type KeyInput = 'up' | 'down' | ' left' | 'right';
doSomething('up');

// Enum - -by default it will be the index number,
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// we can define from the numbers should start, and putting const in the begining will exort only that part to js
const enum Direction {
  Up = 2,
  Down,
  Left,
  Right,
}

// we can give values to it manually
enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

doSomething(Direction.Up);
```

## Generics

```typescript
function identity<T>(arg: T) {
  return arg;
}

let output1 = identity < string > 'str';
let output2 = identity < number > 12;
```

## APIs

### Pick

- this will pick the properties from the object
- no need to change multiple types of objects if one and other are related

```typescript
type User = {
  name: string;
  age: number;
  address: string;
};
const user: Pick<User, 'name' | 'age'> = {
  name: 'salman',
  age: 22,
};
```

### Partial

- partial marks all the values as optional

```typescript
type User = {
  name: string;
  age: number;
  address: string;
};

// this will make all the fields optional
type OptionalUser = Partial<User>;

type OptionalUser = Partial<>;
```

## Readonly

- as the name suggest, it will make any propery read only
- not can be assigned again

```typescript
type User = {
  readonly username: string;
  password: string;
  age: number;
};

type People = Readonly<User>;
```

## Record

- let's us give a cleaner type to object

```typescript
interface User {
  username: string
  email: string
}

const userObject: Record<string, User> = {
  "username": "salman";
  email:"salman@gmail.com"
}
```

## Map

- using js map and defining the types onto it

```typescript
const newUser = new Map<string, number>();
newUser.set('one', 23);
newUser.set('two', 345);
newUser.set('three', 234);

newUser.get('one');
```

## Exclude

- Used to remove an option from Unions

```typescript
type NumberType = number | string | boolean;

const num: Exclude<NumberType, string> = 1;
```

## Zod Infer

- when writing backend codes, we generally have to write the zod schema and type for that, but using infer it will auto create the types for us from looking to the schema

```typescript
const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

type User = z.infer(typeof userSchema)
type User = z.infer<typeof userSchema>


```

# Next Js

## React Server Components

- There can be two components of react:

1.  Client Component - it will be rendered on the client, and will contain all the state and hooks.
    1. By default every component is server component, to make a component client component we need to use `use client`
    2. It can use state and hooks
    3. The child of client component don't need use `use client` to make it client component, it will by default the client component.
    4. Server client boundary is a boundary between server and client
    5. When passing the props, in cross side the data needs to be json serializable. It can be any data while sharing on the same type of components like client to client or server to server.
2.  Server Component - It will be rendered on the server, and will not contain any state or hooks.
    1.  it cannot use state or hooks

## Router

- to create a route in next js, we need to create a folder with the name of the router and then inside that a page file
- to create a nested route, just create another folder in that
- to navigate to other pages, use `Link` (import from)

# SQL : Postgres

## Creating Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Insert

```sql
INSERT INTO users(username, email, password)
VALUES('user_name', 'user@example.com', '*********')
```

## Update

```sql
UPDATE users
SET password = 'new_password'
WHERE email = "user@example.com"
```

## Delete

```sql
DELETE FROM users
WHERE id = "1"
```

## Select

```sql
SELECT * FROM users
WHERE id = "1"
```

## Foreign Key

```sql
--  CREATING TABLE
CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  address VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- DELETE CASCASE - it will delete all the entries if the referenced entry is deleted

-- INSERTING INTO ADDRESSES
INSERT INTO addresses (user_id, address)
VALUES (1, bihar)


-- fetching data
SELECT address
FROM addresses
WHERE user_id = 1;


```

## Transaction

- transaction is a way to execute multiple queries at once
- it will make sure either all are done or none of them are completed

```sql
begin;
INSERT INTO users(username, email, password) VALUES('user_name', 'user@example.com', '*********');
INSERT INTO addresses(user_id, address) VALUES(1, bihar);
commit;
```

## Joins

- when you have to fetch data from connected tabels in the single query

```sql
SELECT users.username, addresses.address
FROM users
JOIN addresses ON users.id = addresses.user_id;
```

### Types of Joins

- `Inner Join` - It is same like join, returns data only if there is a match
- `Left Join` - Returns all the rows from the left table, and the matched rows from the right table
- `Right Join` - Returns all the rows from the right table, and the matched rows from the left table
- `Full Join` - Returns all the rows when there is a match in either left or right table

## Usign pg library

- pg is a library used to connect to postgres database

```javascript

```

# PRISMA

## Creating DB

```bash
#  this will create a folder named prisma, where we can connect and create the schema
npx prisma init

```

## Creating Schema

```sql
model User {
  id Int @id @default(autoincrement())
  name String
  email String @unique
  password String
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

}
```

## Migration

```JavaScript
npx prisma migrate dev --name UserAndTodoAdded
```

## Generating Prisma Client

```bash
npx prisma generate
```

## Relation

- relation is just like foreign key
- it helps to connect to other tables

```prisma
model User{
  id Int @id @default(autoincrement())
  username String
  todos Todo[]
}

model Todo{
  id @id @default(autoincrement())
  title string
  user_id Int
  user User @relation(fields: [user_id], references:[id])
}

```

# Docker

## Volumes

- to retain data between restarts
- specifically for things like databases

### Createing volumes

```bash
 docker volume create volume_database
#  volume_database - can be any name here
```

### Mounting volumes

```bash
docker run -v vol1:/data/db -p 30009:27017 mongo
```

### Deleting a volume

```bash
docker volume rm volume_database
```

## Network

- the ports running inside a docker container is not accessible to othe containers
- to allow one container talk to another docker container

```bash
# creating network
docker network create new_network

# usign network while running images/container

docker run --name container_name --network new_network -p 3000:3000 image_name

```

`NOTE:  while connecting to other containers always use the default ports, the host port is accessible to local machine not other container`

## Using environment variables

- Use `-e VAR=VALUE` to pass variables manually.
- Use .env files to manage variables efficiently `--env-file .env`.

## Multi Stage Builds

- to have a different builds for dev and production

### Image

```bash
FROM node:20 AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM base AS developement
COPY . .
CDM ['npm', 'run', 'dev']

FROM base AS production
COPY . .
RUN npm prune --production #removes dev dependencies
CMD ['npm', 'run', 'start']

```

### Build

```bash
# dev build
docker . build --target developement -t myapp:dev

# prod build
docker . build --target production -t myapp:prod
```

### Run

```bash
docker run -p 3000:3000 -e MONGO_URI=uri_URL -v .:/usr/src/app myapp:dev

```

## Running nodemon in the docker

- nodemon directly does not run in the docker
- we have to use `--legace-watch`

```bash
CMD ["npx", "nodemon", "--legacy-watch", "index.js"]
```

# Deployment

## Serverless

- It is a backend deployment in which the cloud provider dlynamically manages the allocation and provisioning for servers.
- The easier definition: What if you could just write the code, and the app would automatically:
  - deploy
  - auto scale
  - charge you on a per request basis

### Problem with this approach:

- more expensive
- cold start problem(when the server is not available, it will take few time to start initially)

### When should you use a serverless architecture?

1. When you have to get off the ground fast and don't want to worry about deployments
2. When you can't anticipate the traffic and don't want to worry about scaling
3. If you have very low traffic and want to optimize for costs

## warm pool
