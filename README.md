![cf](https://i.imgur.com/7v5ASc8.png) 02: Tools and Context
======
https://travis-ci.org/JudyVue/01-TDD.svg?branch=master
## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork called `lab-02`
* Set up your forked repo to run through Travis CI as demo'd today in class
* Open a pull request to your forked repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc.json** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **.travis.yml** - contains your travis testing instructions
* **package.json** - contains npm package config 
  * jest and eslint must be dependencies
  * create a `lint` script for running eslint `"lint": "eslint **/.js"`
  * create a `test` script for running tests that says `"eslint . && jest --coverage"`
* **lib/** - contains module definitions
* **\_\_test\_\_/** - contains unit tests

## Feature Tasks

#### List Module
  * implement a List constructor using a constructor, factory, or class
  * implement the length property
  * implement the `push()`, methods on the List prototype
  * implement `forEach()`, `map()`, `filter()`, and `reduce()` as pure methods on the List prototype
  * Do not use any built-in array methods to do this
  
#### Stretch Goals
  * implement `shift()`, `unshift()`, and `splice()` as methods on the List prototype
  * Note that for these, because they mutate the list index, you will need to account for re-indexing the keys numerically from 0

## Testing
Create a NodeJS module in the \_\_test\_\_/ directory named `list.test.js` that asserts the correctness of the list module.

Use the `describe` and `it` (or `test`) methods to define descriptive tests and increase readablity
Each `it` callback should aim to test a small, well defined, feature of a function - this may include:
  * tests that ensure the list module functions correctly with error-check parameters
  * tests that the correct errors are thrown with invalid arguments exist
  * tests to ensure that the list module functions return the correct results when invoked with valid arguments

##  Documentation
push will push new elements into an array
forEach will take an array and apply a function to it ie console.log will console log each element individually
map will take each element and apply a function to each element and return the modified array
filter will filter out elements from an array if they do not fit a certain criteria
reduce will take all the elements in an array and reduce them down to 1 value ie [1,2,3,4,5] will be [15]
