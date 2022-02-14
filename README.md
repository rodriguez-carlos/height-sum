# Height Sum
## The Problem
Given a set of data pertaining to NBA players and given an integer number (input), find every pair of players whose heights add up to the integer number.
## The Code
The code for this solution is written in JavaScript, using English for all variables. The provided data is retrieved using Fetch API. 
## The Algorithm
To solve this problem, I implemented an algorithm (found in ```sum-check```) which iterates over every player, and stores their height and identifier (index) in a hash table. The data structure of this table is a JavaScript object, and as the iteration moves along, it performs a lookup of the required value for each element in the hash table. To accommodate players with repeated height, the hash table does not store a single index but an array of indexes. The minimum complexity is O(n), and this complexity increases with the number of matches it finds, meaning that any processing that takes place after the initial O(n) always finds matches. The hash table is a variable called ```heightsMap```.
## Getting started
Clone this repo or download the files. Maintain the folder structure and use your preferred method for launching html files.
## Main Page
Launch the file ```index.html``` to visualize the app's front end. Input a positive integer to see the magic. To input a second (and third, and fourth) number, you need not refresh the page.
## Test Page
There are vanilla JS unit tests available. Simply launch the file ```test.js```, open the console, and click the "Run Tests" button. The logic behind these tests is found in ```test.js```.
### Author
My name is Carlos Rodríguez, I'm a Venezuelan industrial engineer. I live in Colombia, and I work as an English-Spanish translator. I'm learning a bit more about web development every single day.
