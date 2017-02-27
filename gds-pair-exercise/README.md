# The Greeting Challenge

## Instructions:
1. Fork this repo
2. Create a new branch to work on
2. Using TDD (use a test suite of your choice), write a javascript function that satisfies **at least the first five requirements given below**. Requirements 6-8 are optional. Bear in mind the guidance at the bottom.
3. Commit your changes (both source code and tests)
4. Make a pull request to the master branch **on your forked repo** (not to the original fatlama repo).
5. Email owen@fatlama.com with a link to the pull request.

## Requirements:
### Requirement 1
Write a method `greet(name)` that interpolates `name` in a simple greeting. For example, when `name` is "Bob", the method should return a string `"Hello, Bob."`.

### Requirement 2
Handle nulls by introducing a stand-in. For example, when `name` is null, then the method should return the string `"Hello, my friend."`

### Requirement 3
Handle shouting. When `name` is all uppercase, then the method should shout back to the user. For example, when `name` is "JERRY" then the method should return the string `"HELLO JERRY!"`

### Requirement 4
Handle two names of input. When `name` is an array of two names, then both names should be printed. For example, when `name` is `["Jill", "Jane"]`, then the method should return the string `"Hello, Jill and Jane."`

### Requirement 5
Handle arbitrarily names of input. When `name` represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when `name` is `["Amy", "Brian", "Charlotte"]`, then the method should return the string `"Hello, Amy, Brian, and Charlotte."`

### Requirement 6
Allow mixing of normal and shouted names by separating the response into two greetings. For example, when `name` is `["Amy", "BRIAN", "Charlotte"]`, then the method should return the string `"Hello, Amy and Charlotte. AND HELLO BRIAN!"`

### Requirement 7
If any entries in name are a string containing a comma, split it as its own input. For example, when name is `["Bob", "Charlie, Dianne"]`, then the method should return the string `"Hello, Bob, Charlie, and Dianne."`.

### Requirement 8
Allow the input to escape intentional commas introduced by Requirement 7. These can be escaped in the same manner that CSV is, with double quotes surrounding the entry. For example, For example, when `name` is `["Bob", "\"Charlie, Dianne\""]`, then the method should return the string `"Hello, Bob and Charlie, Dianne."`.

## Guidance
- Try to implement appropriate [separation of concerns](https://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/) & modular code
- Think hard about naming of functions and variables
- The tests are just as important as the actual code, if not more
- Code style & file structure is up to you, but make sure it is consistent and legible
